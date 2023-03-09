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
    const intName = namePass.current.value
    const intPass = namePassUp.current.value
      const api = await axios.get(`${API_URL}/admin/?name=${intName}`)
      if(api.data.length == 0){
        setError(0)
      }
      if(api.data.length !== 0){
        setError(null)
      }
      api.data.map(e => {
        if(e.password == intPass){
          window.localStorage.setItem('Auth', e)
          navlink('/admin')
        }
      })
    }
    const HandleNav = () => {
        navlink('/')
    }
  return (
    <div className="SignPage">
      <div className="SignPagePath" onClick={HandleNav}><i className='fa-solid fa-arrow-left'></i></div>
        <form onSubmit={HandleSubmit} className="SignModal">
            <h1>Log in</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea omnis cumque reprehenderit dolores quo ullam magnam nam, numquam molestiae.</p>
            {error == 0 ? <p className='SignP'>Ism yoki parolda xatolik mavjud!</p> : null}
            <input type="text" ref={namePass} placeholder='Ismingizni kiriting' className='ins'/>
            <input type="text" ref={namePassUp} placeholder='Parolingizni kiritng' className='ins'/>
            <button type='submit'>Sign in</button>
        </form>
    </div>
  );
}

export default SignPage;