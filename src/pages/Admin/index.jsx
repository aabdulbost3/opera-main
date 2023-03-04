import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Project from './Projects';
import Blogs from './Blogs';
import Message from './Message';
import Sidebar from './Sidebar';
import './style.css';

function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if(window.localStorage.getItem("authToken")){
      console.log('token');
    }else{
      navigate('/sign')
    }
  }, [])
  return (
    <div className="Admin">
      <Sidebar/>
      <div className="AdminMain">
        {window.localStorage.getItem('HandleLi') == "Projects" ? <Project/> :
        window.localStorage.getItem('HandleLi') == "Blogs" ? <Blogs/> :
        window.localStorage.getItem('HandleLi') == "Messages" ? <Message/> : null
        }
      </div>
    </div>
  );
}

export default Admin;