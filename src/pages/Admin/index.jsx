import Project from './Projects';
import Blogs from './Blogs';
import Message from './Message';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import OperaIco from "../../operaIcon.ico"
import './style.css';

function Admin() {
  const [handleLi, setHandleLi] = useState('')
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 650px)').matches
  )
  const sideEdres = useRef()
    const HandleCloseSide = () => {
      sideEdres.current.style.left = '-100%'
    }
    useEffect(() => {
      window
      .matchMedia('(max-width: 650px)')
      .addEventListener('change', e => setMatches(e.matches))
    }, [])
    const HandleLi = (e) => {
      setHandleLi(e.target.id)
      if(matches){
        HandleCloseSide();
      }
    }
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if(window.localStorage.getItem("Auth")){
  //     console.log('token');
  //   }else{
  //     navigate('/sign')
  //   }
  // }, [])
  return (
    <div className="Admin"> 
      <div className="Sidebar">
        <img src={OperaIco} />
        <ul>
            <li><NavLink to='/' className='Linker'><i className="fa-solid fa-house"></i> <p  className='SideText'>Home</p></NavLink></li>
            <li onClick={HandleLi} id="Projects"><i className="fa-solid fa-folder"></i> <p  id="Projects" onClick={HandleLi} className='SideText'>Projects</p></li>
            <li onClick={HandleLi} id="Messages"><i className="fa-solid fa-message"></i> <p  id="Messages" onClick={HandleLi} className='SideText'>Messages</p></li>
            <li onClick={HandleLi} id="Blogs"><i className="fa-solid fa-user"></i> <p  id="Blogs" onClick={HandleLi} className='SideText'>Admins</p></li>
        </ul>
        {/* <div className="sidebarBot">
          <i className='fa-solid fa-user'></i>
          <h2>{window.localStorage.getItem('Auth')}</h2>
        </div> */}
      </div>
      <div className="AdminMain">
        {handleLi == "Projects" ? <Project/> :
        handleLi == "Blogs" ? <Blogs/> :
        handleLi == "Messages" ? <Message/> : null
      }
      </div>
    </div>
  );
}

export default Admin;