import './style.css';
import { DeleteProject, GetProject, PostProject, PutProject, GetProjectId } from "../../../redux/project";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from 'react';
import { IMAGE_URL } from '../../../utils';
import axios from 'axios';

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
    const [moreUploadImage, setmoreUploadImage] = useState([]);
    const UploadFile = (e) => {
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
                  imgsUpload.push({img: response?.data.secure_url})
                  setMoreLoading(false)
              } catch (error) {
                  console.log(error);
              }
            }
            postImage()
          }
        setmoreUploadImage(imgsUpload)
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
                console.log(response?.data.secure_url);
                moreImages.current.value.push({id: e.target.id,img: response?.data.secure_url})
                setImgesLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        postImage()
    }  
    useEffect(() => {
        dispatch(GetProject())
    },[])
    const projectDelete = (e) => {
        dispatch(DeleteProject(e.target.value))
        dispatch(GetProject())
    }
    const projectEdit = async(e) => {
        setMoreEdit(null);
        const data = await dispatch(GetProjectId(e.target.id))
        setMoreEdit(data);
        setEditTitle(data.payload.title)
        setEditMainImages(data.payload.mainImg)
        moreImages.current.value = []
        projectOverlay.current.style.display = "block"
        setmoreUploadImage([])
        SetProjectModal1(true)
    }
    const AddProject = () => {
        SetProjectModal(true)
        projectOverlay.current.style.display = "block"
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        const body = {
            mainImg: imgUpload,
            title: name.current.value,
            moreImg: moreUploadImage
        }
        dispatch(PostProject(body))
        dispatch(GetProject())
        SetProjectModal(false)
        projectOverlay.current.style.display = "none"
        setImgUpload(null);
        setmoreUploadImage(null)
    }
    const HandleSubmit1 = (e) => {
        e.preventDefault();
        let moreData = []
        moreImages.current.value.length > 0 ? moreEdit.payload.moreImg.map(e => {
            moreImages.current.value.map(el => {
                if(e.id == el.id){moreData.push(el)}
                else{moreData.push(e)}
        })
        }) : moreData = moreEdit.payload.moreImg
        console.log(moreUploadImage);
        moreUploadImage.map(e => {
            moreData.push(e)
        })
        const body = {
            title: editTitle,
            mainImg: editMainImages,
            moreImg: moreData
        }
        const id = moreEdit.payload.id
        dispatch(PutProject({body, id}))
        dispatch(GetProject())
        SetProjectModal1(false)
        projectOverlay.current.style.display = "none"
        setEditMainImages(null)
        setmoreUploadImage([])
    }
    const handleChange = event => {
        setEditTitle(event.target.value);
    };
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
                <h4>Choose Project More Photos</h4>
                {moreLoading ? <p className='yellowLoading'>Loading file(s)...</p> : <input type="file" onChange={UploadFile} multiple />}
                <button type="submit">Add</button>
            </div>
        </form> :null}
        {projectModal1 ? <form onSubmit={HandleSubmit1} className="projectModal">
            <h3>Edit Project</h3>
            <div>
                <h4>Edit Project Title</h4>
                <input type="text" onChange={handleChange}  value={editTitle}/>
                <h4>Edit Project Main Photo</h4>
                {loading ? <p className='yellowLoading'>Loading...</p> : <input type="file" id="noneId" onChange={HandleFile} />}
                <h4>Edit Project More Photos</h4>
                {moreEdit.payload.moreImg ?
                 moreEdit.payload.moreImg.map((e,i) => <span key={i}>{imagesLoading ? <p className='yellowLoading'>Loading ...</p> :<input key={i} id={e.id} type="file" onChange={HandleEditImagesFile}/>}</span>)
                 : <p>No Photos here yet</p>}
                <h4>Add Other More Photo</h4>
                {moreLoading ? <p className='yellowLoading'>Loading ...</p> :<input id={moreEdit.payload.moreImg.length + 1} type="file" onChange={UploadFile} multiple />}
                <button type="submit">Edit</button>
            </div>
        </form> :null}
        <div className="ProjectsNav">
            <h1>Projects</h1>
            <button onClick={AddProject}>+ Add Project</button>
        </div>
        <ul>
            {dataProject.getProject.Success == true ? dataProject.getProject?.Data.map((elem, index) => 
            <li key={index}>
                <img src={elem.mainImg} alt="img" />
                <h3>{elem.title}</h3>
                <div className="AdBtnBox">
                    <button value={elem.id} onClick={projectDelete}><i className="fa-solid fa-trash"></i>Delete</button>
                    <button id={elem.id} onClick={projectEdit}><i className="fa-solid fa-edit"></i>Edit</button>
                </div>
            </li>)
            :dataProject.getProject.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
        </ul>
    </div>
  );
}

export default Projects;