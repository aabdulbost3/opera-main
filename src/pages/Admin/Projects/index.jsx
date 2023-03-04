import './style.css';
import { DeleteProject, GetProject, PostProject, PutProject } from "../../../redux/project";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from 'react';
import { IMAGE_URL } from '../../../utils';
import axios from 'axios';

function Projects() {
    const name = useRef();
    const editor = useRef();
    const [projectModal, SetProjectModal] = useState(false)
    const [projectModal1, SetProjectModal1] = useState(false)
    const projectOverlay = useRef(false)
    const [imgUpload, setImgUpload] = useState();
    const [loading, setLoading] = useState();
    const dispatch = useDispatch()
    const dataProject = useSelector(state => state.project)
    const HandleFile = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'images')
        setLoading(true)
        const postImage = async () => {
            try {
                const response = await axios.post(`${IMAGE_URL}`, formData)
                setImgUpload(response?.data.secure_url)
                setLoading(false)
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
    const projectEdit = (e) => {
        // dispatch(DeleteProject(e.target.value))
        // dispatch(GetProject())
        SetProjectModal1(true)
        projectOverlay.current.style.display = "block"
    }
    const AddProject = () => {
        SetProjectModal(true)
        projectOverlay.current.style.display = "block"

    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        const body = {
            img: imgUpload,
            name: name.current.value
        }
        dispatch(PostProject(body))
        dispatch(GetProject())
        SetProjectModal(false)
        projectOverlay.current.style.display = "none"
        setImgUpload(null)
    }
    const HandleSubmit1 = (e) => {
        e.preventDefault();
        const body = {
            img: imgUpload,
            name: name.current.value
        }
        const id = editor.current.value
        dispatch(PutProject({body, id}))
        dispatch(GetProject())
        SetProjectModal1(false)
        projectOverlay.current.style.display = "none"
        setImgUpload(null)
    }
  return (
    <div className="Projects">
        <div className="overlay" ref={projectOverlay} onClick={() => {SetProjectModal(false);projectOverlay.current.style.display = "none";SetProjectModal1(false)}}></div>
        {projectModal ? <form onSubmit={HandleSubmit} className="projectModal">
            <h3>Add Project</h3>
            <input type="text" ref={name} placeholder='Enter Project Name' required/>
            {loading ? <p>Loading...</p> : <input type="file" onChange={HandleFile} />}
            <button type="submit">Add </button>
        </form> :null}
        {projectModal1 ? <form onSubmit={HandleSubmit1} className="projectModal">
            <h3>Edit Project</h3>
            <input type="text" ref={name} placeholder='Enter Project Name' required/>
            {loading ? <p>Loading...</p> : <input type="file" onChange={HandleFile} />}
            <button type="submit">Edit</button>
        </form> :null}
        <div className="ProjectsNav">
            <h1>Projects</h1>
            <button onClick={AddProject}>+ Add Project</button>
        </div>
        <ul>
            {dataProject.getProject.Success == true ? dataProject.getProject?.Data.map((elem, index) => 
            <li key={index}>
                <img src={elem.img} alt="img" />
                <h3>{elem.name}</h3>
                <div className="AdBtnBox">
                    <button value={elem.id} onClick={projectDelete}><i className="fa-solid fa-trash"></i>Delete</button>
                    <button value={elem.id} ref={editor} onClick={projectEdit}><i className="fa-solid fa-edit"></i>Edit</button>
                </div>
            </li>)
            :dataProject.getProject.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
        </ul>
    </div>
  );
}

export default Projects;