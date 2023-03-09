import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent/index'
import Navbar from '../../components/NavbarComponent/index'
import './style.css'
import {API_URL} from '../../utils/index'
import axios from 'axios'

function MorePage() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const HandleItem = () => {
        navigate('/')
    }
    
    return(
        <div className="MorePage">
            <Navbar/>
            <div className="MorePageBox">
                <div className="MoreExitBox" onClick={HandleItem}><i className='fa-solid fa-arrow-left'></i></div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default MorePage