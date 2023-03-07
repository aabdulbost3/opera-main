import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils';
import './style.css';
import axios from "axios"

function SignPage() {
  const namePass = useRef()
  const namePassUp = useRef()
  const intName = namePass.current.value
  const intPass = namePassUp.current.value
    const HandleSubmit = async (e) => {
      e.preventDefault()
      const api = (await axios.get(`${API_URL}/admin/?name=${intName}`)).data
      api.map(e => {
        console.log(api[e]);
      })
      if(api){
        console.log('ok');
      } else{
        console.log('bad');
      }
      // const api = await axios.get(`${API_URL}/admin`)
      // console.log(api)
    }
    const navlink = useNavigate();
    const HandleNav = () => {
        navlink('/')
    }
  return (
    <div className="SignPage">
      <div className="SignPagePath" onClick={HandleNav}><i className='fa-solid fa-arrow-left'></i></div>
        <form onSubmit={HandleSubmit} className="SignModal">
            <h1>Log in</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea omnis cumque reprehenderit dolores quo ullam magnam nam, numquam molestiae.</p>
            <input type="text" ref={namePass} placeholder='Ismingizni kiriting' className='ins'/>
            <input type="text" ref={namePassUp} placeholder='Parolingizni kiritng' className='ins'/>
            <button type='submit'>Sign in</button>
        </form>
    </div>
  );
}

export default SignPage;