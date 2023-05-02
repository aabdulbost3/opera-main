import './style.css';
import { useEffect, useRef, useState } from 'react'
import { DeleteBlog, GetBlog, GetBlogMore, PostBlog, PutBlog } from "../../../redux/blog";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate()
  const editor1 = useRef();
  const del1 = useRef();
  const Title = useRef();
  const Password = useRef();
  const [BlogModal, SetBlogModal] = useState(false)
  const [BlogModal1, SetBlogModal1] = useState(false)
  const BlogOverlay = useRef()
  const dispatch = useDispatch()
  const dataBlog = useSelector(state => state.blog)
  const config = {
    headers:{
        Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}` 
    }
  }
  useEffect(() => {
      dispatch(GetBlog(config))
    },[])
  const blogDelete = async(e) => {
    const id = del1.current.value
    await dispatch(DeleteBlog({config, id}))
    await dispatch(GetBlog(config))
    navigate("/sign")
  }
  const HandleSubmit = async(e) => {
    e.preventDefault();
    const body = {
        name: Title.current.value,
        password: Password.current.value
    }
    await dispatch(PostBlog({body, config}))
    await dispatch(GetBlog(config))
    SetBlogModal(false)
    BlogOverlay.current.style.display = "none"
  }
  const HandleSubmit1 = async(e) => {
  e.preventDefault();
  const body = {
    name: Title.current.value,
    password: Password.current.value
  }
  const id = editor1.current.value
  await dispatch(PutBlog({config,body, id}))
  await dispatch(GetBlog(config))
  SetBlogModal1(false)
  BlogOverlay.current.style.display = "none"
  }
  const HandleEdit = async(e) => {
    BlogOverlay.current.style.display="block";
    SetBlogModal1(true);
    }
  return (
    <div className="Blog">
      <div className="overlay" ref={BlogOverlay} onClick={() => {SetBlogModal(false);BlogOverlay.current.style.display = "none";SetBlogModal1(false)}}></div>
        { BlogModal ? <form onSubmit={HandleSubmit} className="projectModal">
            <h3>Add Admin</h3>
            <input ref={Title} type="text" placeholder='Enter Admin Title' required/>
            <input ref={Password} type="text" placeholder='Enter Admin Password' required/>
            <button type="submit">Add</button>
        </form> :null}
        {BlogModal1 ? <form onSubmit={HandleSubmit1} className="projectModal">
            <h3>Edit Admin</h3>
            <input ref={Title} type="text" placeholder='Enter New Admin Title' required/>
            <input ref={Password} type="text" placeholder='Enter New Admin Password' required/>
            <button type="submit">Edit</button>
        </form> :null}
        <div className="BlogNav">
        <h1> <i className='fa-solid fa-user'></i> Admins</h1>
        <button className='BlogNavBtn' onClick={() => {SetBlogModal(true);BlogOverlay.current.style.display="block"}}>+<i className='fa-solid fa-user'></i>  Add Admin</button>
        </div>
      <ul>
      {dataBlog.getBlog.Success == true ? dataBlog.getBlog?.Data.data.data.map((elem, index) => 
        <li key={index}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: {elem.name}</h3>
            <div className="AdBtnBox">
                <button value={elem.id} ref={del1} onClick={blogDelete}><i className="fa-solid fa-trash"></i>Delete</button>
                <button value={elem.id} ref={editor1} onClick={HandleEdit}><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>)
        :dataBlog.getBlog.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataBlog.getBlog.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: Abdulbosit</h3>
            <p>Password: 0000</p>
            <div className="AdBtnBox">
                <button><i className="fa-solid fa-trash"></i>Delete</button>
                <button><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>
      </ul>
    </div>
  );
}

export default Blog;