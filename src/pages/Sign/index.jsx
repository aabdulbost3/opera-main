import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils';
import './style.css';
import axios from "axios"

function SignPage() {
  const navlink = useNavigate();
  const namePass = useRef()
  const namePassUp = useRef()
  const [error, setError] = useState()
  const HandleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      name: namePass.current.value,
      password: namePassUp.current.value
    }
    try {
      const res =  await axios.post("https://opera-mini-production.up.railway.app/auth/login", body)
      setError(false)
      window.localStorage.setItem("AuthToken", res.data.data)
      navlink("/admin")
    } catch (error) {
      setError(true)
    }
    }
    const HandleNav = () => {
        navlink('/')
    }
  return (
    <div className="SignPage">
      <div className="SignPagePath" onClick={HandleNav}><i className='fa-solid fa-arrow-left'></i></div>
        <form onSubmit={HandleSubmit} className="SignModal">
            <h1>Log in</h1>
            <p>Siz bu yerdan Admin panlega o'ta olasiz.Iltimos ism va parolni to'g'ri holatda kiriting!</p>
            {error ? <p className='SignP'>Ism yoki parolda xatolik mavjud!</p> : null}
            <input type="text" ref={namePass} placeholder='Ismingizni kiriting' className='ins'/>
            <input type="text" ref={namePassUp} placeholder='Parolingizni kiritng' className='ins'/>
            <button type='submit'>Sign in</button>
        </form>
    </div>
  );
}

export default SignPage;