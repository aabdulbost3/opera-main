import './style.css';
import { useEffect, useRef, useState } from 'react'
import { DeleteBlog, GetBlog, PostBlog, PutBlog } from "../../../redux/blog";
import { useSelector, useDispatch } from "react-redux";
import { IMAGE_URL } from '../../../utils';
import axios from 'axios';

function Blog() {
  const editor1 = useRef();
  const Title = useRef();
  const Text = useRef();
  const Name = useRef();
  const Date = useRef();
  const [imgUpload, setImgUpload] = useState();
  const [loading, setLoading] = useState();
  const [BlogModal, SetBlogModal] = useState(false)
  const [BlogModal1, SetBlogModal1] = useState(false)
  const BlogOverlay = useRef()
  const dispatch = useDispatch()
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
        img: imgUpload,
        title: Title.current.value,
        text: Text.current.value,
        name: Name.current.value,
        date: Date.current.value
    }
    dispatch(PostBlog(body))
    dispatch(GetBlog())
    SetBlogModal(false)
    BlogOverlay.current.style.display = "none"
    setImgUpload(null)
}
const HandleSubmit1 = (e) => {
  e.preventDefault();
  const body = {
    img: imgUpload,
    title: Title.current.value,
    text: Text.current.value,
    name: Name.current.value,
    date: Date.current.value
  }
  const id = editor1.current.value
  dispatch(PutBlog({body, id}))
  dispatch(GetBlog())
  SetBlogModal1(false)
  BlogOverlay.current.style.display = "none"
  setImgUpload(null)
}
  return (
    <div className="Blog">
      <div className="overlay" ref={BlogOverlay} onClick={() => {SetBlogModal(false);BlogOverlay.current.style.display = "none";SetBlogModal1(false)}}></div>
        {BlogModal ? <form onSubmit={HandleSubmit} className="projectModal">
            <h3>Add Blog</h3>
            {loading ? <p>Loading...</p> : <input type="file" onChange={HandleFile} />}
            <input ref={Title} type="text" placeholder='Enter Blog Title' required/>
            <input ref={Text} type="text" placeholder='Enter Blog Text' required/>
            <input ref={Name} type="text" placeholder='Enter Blog Name' required/>
            <input ref={Date} type="date" placeholder='Enter Blog Date' required/>
            <button type="submit">Add </button>
        </form> :null}
        {BlogModal1 ? <form onSubmit={HandleSubmit1} className="projectModal">
            <h3>Edit Blog</h3>
            {loading ? <p>Loading...</p> : <input type="file" onChange={HandleFile} />}
            <input ref={Title} type="text" placeholder='Enter Blog Title' required/>
            <input ref={Text} type="text" placeholder='Enter Blog Text' required/>
            <input ref={Name} type="text" placeholder='Enter Blog Name' required/>
            <input ref={Date} type="date" placeholder='Enter Blog Date' required/>
            <button type="submit">Edit</button>
        </form> :null}
        <div className="BlogNav">
        <h1>Blogs</h1>
        <button onClick={() => {SetBlogModal(true);BlogOverlay.current.style.display="block"}}>+ Add Blog</button>
        </div>
      <ul>
      {dataBlog.getBlog.Success == true ? dataBlog.getBlog?.Data.map((elem, index) => 
        <li key={index}>
            <img src={elem.img} alt="" />
            <h3>{elem.title}</h3>
            <p>{elem.text}</p>
            <div className="BlogDate">
              <h5>{elem.name}</h5>
              <h5>{elem.date}</h5>
            </div>
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