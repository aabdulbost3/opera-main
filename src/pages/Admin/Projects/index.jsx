import './style.css';
import { DeleteProject, GetProject, PostProject, PutProject, GetProjectId } from "../../../redux/project";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from 'react';
import { IMAGE_URL } from '../../../utils';
import axios from 'axios';
import { DeleteImage, PostImage, PutImage } from '../../../redux/image';

function Projects() {
    const name = useRef();
    const moreImages = useRef([]);
    const [editTitle, setEditTitle] = useState();
    const [editMainImages, setEditMainImages] = useState([]);
    const [projectModal, SetProjectModal] = useState(false)
    const [projectModal1, SetProjectModal1] = useState(false)
    const projectOverlay = useRef(false)
    const [imgUpload, setImgUpload] = useState();
    const [loading, setLoading] = useState();
    const [imagesLoading, setImgesLoading] = useState(false);
    const [moreEdit, setMoreEdit] = useState();
    const [moreLoading, setMoreLoading] = useState();
    const dispatch = useDispatch()
    const dataProject = useSelector(state => state.project)
    const [moreUploadImage, setmoreUploadImage] = useState();
    const input = useRef(null)
    const inputMain = useRef(null)
    const [imgId, setImgId] = useState();
    useEffect(() => {
      dispatch(GetProject())
    }, [1])
    
    const UploadFile = async(e) => {
        const imgsUpload = [];
        for (let i = 0; i < e.target.files.length; i++) {
          const element = e.target.files[i];
          const formData = new FormData()
          formData.append('file', element)
          formData.append('upload_preset', 'aozyh8sm')
          setMoreLoading(true);
          const postImage = async () => {
              try {
                  const response = await axios.post(`${IMAGE_URL}`, formData)
                  imgsUpload.push(response?.data.secure_url)
                  setMoreLoading(false)
              } catch (error) {
                  console.log(error);
              }
            }
            postImage()
          }
        setmoreUploadImage(imgsUpload)
    }
    const deleteImage = async(e) => {
        const config = {headers:{Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}`}}
        let id = e.target.id
        await dispatch(DeleteImage({id, config}))
    }
    const HandleFile = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'aozyh8sm')
        setLoading(true)
        const postImage = async () => {
            try {
                const response = await axios.post(`${IMAGE_URL}`, formData)
                setImgUpload(response?.data.secure_url)
                setEditMainImages(response?.data.secure_url)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        postImage()
    }
    const HandleEditImagesFile = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'aozyh8sm')
        setImgesLoading(true)
        const postImage = async () => {
            try {
                const response = await axios.post(`${IMAGE_URL}`, formData)
                const config = {headers:{Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}`}}
                const body = {image: response?.data.secure_url}
                const id = imgId
                await dispatch(PutImage({id,body,config}))
                setImgesLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        postImage()
    }
    const projectDelete = async(e) => {
        const config = {
            headers:{
                Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}` 
            }
        }
        let id = e.target.value
        await dispatch(DeleteProject({id, config}))
        dispatch(GetProject())
    }
    const projectEdit = async(e) => {
        const data = await dispatch(GetProjectId(e.target.id))
        await setMoreEdit(data.payload);
        console.log(moreEdit);
        setEditTitle(data.payload.data.title)
        setEditMainImages(data.payload.data.img)
        moreImages.current.value = []
        projectOverlay.current.style.display = "block"
        setmoreUploadImage(null)
        SetProjectModal1(true)
    }
    const AddProject = () => {
        SetProjectModal(true)
        setmoreUploadImage(null)
        projectOverlay.current.style.display = "block"
    }
    const HandleSubmit = async(e) => {
        e.preventDefault();
        const body = {
            title: name.current.value,
            img: imgUpload
        }
        const config = {
            headers:{
                Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}` 
            }
        }
        await dispatch(PostProject({body, config}))
        dispatch(GetProject())
        SetProjectModal(false)
        projectOverlay.current.style.display = "none"
        setImgUpload(null);
        setmoreUploadImage(null);
    }
    const HandleSubmit1 = async(e) => {
        e.preventDefault();
        const body = {
            title: editTitle,
            img: editMainImages
        }
        let id = moreEdit.data.id
        const config = {headers:{Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}`}}
        const data = {
            images: moreUploadImage
        }
        console.log(data);  
        await dispatch(PostImage({id, data,config}))
        await dispatch(PutProject({body, id, config}))
        dispatch(GetProject())
        SetProjectModal1(false)
        projectOverlay.current.style.display = "none"
        setEditMainImages(null)
        setmoreUploadImage([])
    }
    const handleChange = event => {
        setEditTitle(event.target.value);
    }
  return (
    <div className="Projects">
        <div className="overlay" ref={projectOverlay} onClick={() => {SetProjectModal(false);projectOverlay.current.style.display = "none";SetProjectModal1(false);setImgUpload(null);setmoreUploadImage(null);setLoading(null);setMoreLoading(null)}}></div>
        {projectModal ? <form onSubmit={HandleSubmit} className="projectModal">
            <h3>Add Project</h3>
            <div>
                <h4>Enter Project Title</h4>
                <input type="text" ref={name} placeholder='Enter Project Name' required/>
                <h4>Choose Project Main Photo</h4>
                {loading ? <p className='yellowLoading'>Loading...</p> : <input type="file" id="noneId" onChange={HandleFile} />}
                <button type="submit">Add</button>
            </div>
        </form> :null}
        {projectModal1 ? <form onSubmit={HandleSubmit1} className="projectModal">
            <h3>Edit Project</h3>
            <div>
                <h4>Edit Project Title</h4>
                <input type="text" onChange={handleChange}  value={editTitle}/>
                <h4>Edit Project Main Photo</h4>
                {loading ? <p className='yellowLoading'>Loading...</p> :
                <div className="editImageBox">
                <img src={moreEdit.data.img} alt="img" />
                    <div>
                        <button onClick={() => inputMain.current.click()} type="button"><i className="fa-solid fa-edit"></i></button>
                        <input ref={inputMain} type="file" onChange={HandleFile}/>
                    </div>
                </div>}
                <h4>Edit Project More Photos</h4>
                {moreEdit.data.images.length > 0 ?
                 moreEdit.data.images.map((e,i) => <span key={i}>{imagesLoading ? <p className='yellowLoading'>Loading ...</p>
                     :<div className="editImageBox">
                        <img src={e.img} alt="img" />
                        <div>
                            <button id={e.id} onClick={deleteImage} type="button"><i className="fa-solid fa-trash" id={e.id} onClick={deleteImage}></i></button>
                            <button id={e.id} onClick={(el) => {setImgId(el.target.id);input.current.click();}} type="button"><i className="fa-solid fa-edit" id={e.id}></i></button>
                            <input ref={input} id={e.id} type="file" onChange={HandleEditImagesFile}/>
                        </div>
                    </div>
                    }</span>)
                 : <p>No Photos here yet</p>}
                <h4>Add Other More Photo</h4>
                {moreLoading ? <p className='yellowLoading'>Loading ...</p> :<input type="file" onChange={UploadFile} multiple />}
                <button type="submit">Edit</button>
            </div>
        </form> :null}
        <div className="ProjectsNav">
            <h1><i className='fa-solid fa-folder'></i> Projects</h1>
            <button className='ProjectsNavBtn' onClick={AddProject}>+<i className='fa-solid fa-folder'></i> Add Project</button>
        </div>
        <ul>
            {dataProject.getProject.Success == true ? dataProject.getProject?.Data.data.data.map((elem, index) => 
            <li key={index}>
                <img src={elem.img} alt="img" />
                <h3>{elem.title}</h3>
                <div className="AdBtnBox">
                    <button value={elem.id} onClick={projectDelete}><i className="fa-solid fa-trash"></i>Delete</button>
                    <button id={elem.id} onClick={projectEdit}><i className="fa-solid fa-edit"></i>Edit</button>
                </div>
            </li>)
            :dataProject.getProject.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
            <li>
                <img src="https://picsum.photos/300" alt="img" />
                <h3>HEh lol</h3>
                <div className="AdBtnBox">
                    <button><i className="fa-solid fa-trash"></i>Delete</button>
                    <button><i className="fa-solid fa-edit"></i>Edit</button>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default Projects;