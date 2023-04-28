import './style.css';
import { useEffect, useRef, useState } from 'react'
import { DeleteBlog, GetBlog, PostBlog, PutBlog } from "../../../redux/blog";
import { useSelector, useDispatch } from "react-redux";

function Blog() {
  const editor1 = useRef();
  const Title = useRef();
  const Password = useRef();
  const [BlogModal, SetBlogModal] = useState(false)
  const [BlogModal1, SetBlogModal1] = useState(false)
  const BlogOverlay = useRef()
  const dispatch = useDispatch()
  const dataBlog = useSelector(state => state.blog)
  useEffect(() => {
      dispatch(GetBlog())
  },[])
  const blogDelete = (e) => {
    dispatch(DeleteBlog(e.target.value))
    dispatch(GetBlog())
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    const body = {
        name: Title.current.value,
        password: Password.current.value
    }
    dispatch(PostBlog(body))
    dispatch(GetBlog())
    SetBlogModal(false)
    BlogOverlay.current.style.display = "none"
}
const HandleSubmit1 = (e) => {
  e.preventDefault();
  const body = {
    name: Title.current.value,
    password: Password.current.value
  }
  const id = editor1.current.value
  dispatch(PutBlog({body, id}))
  dispatch(GetBlog())
  SetBlogModal1(false)
  BlogOverlay.current.style.display = "none"
}
  return (
    <div className="Blog">
      <div className="overlay" ref={BlogOverlay} onClick={() => {SetBlogModal(false);BlogOverlay.current.style.display = "none";SetBlogModal1(false)}}></div>
        {BlogModal ? <form onSubmit={HandleSubmit} className="projectModal">
            <h3>Add Admin</h3>
            <input ref={Title} type="text" placeholder='Enter Admin Title' required/>
            <input ref={Password} type="text" placeholder='Enter Admin Password' required/>
            <button type="submit">Add</button>
        </form> :null}
        {BlogModal1 ? <form onSubmit={HandleSubmit1} className="projectModal">
            <h3>Edit Admin</h3>
            <input ref={Title} type="text" placeholder='Enter Admin Title' required/>
            <input ref={Password} type="text" placeholder='Enter Admin Password' required/>
            <button type="submit">Edit</button>
        </form> :null}
        <div className="BlogNav">
        <h1> <i className='fa-solid fa-user'></i> Admins</h1>
        <button className='BlogNavBtn' onClick={() => {SetBlogModal(true);BlogOverlay.current.style.display="block"}}>+<i className='fa-solid fa-user'></i>  Add Admin</button>
        </div>
      <ul>
      {dataBlog.getBlog.Success == true ? dataBlog.getBlog?.Data.map((elem, index) => 
        <li key={index}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <h3>Name: {elem.name}</h3>
            <p>Password: {elem.password}</p>
            <div className="AdBtnBox">
                <button value={elem.id} onClick={blogDelete}><i className="fa-solid fa-trash"></i>Delete</button>
                <button value={elem.id} ref={editor1} onClick={() => {SetBlogModal1(true);BlogOverlay.current.style.display="block";}}><i className="fa-solid fa-edit"></i>Edit</button>
            </div>
        </li>)
        :dataBlog.getBlog.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataBlog.getBlog.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
      </ul>
    </div>
  );
}

export default Blog;