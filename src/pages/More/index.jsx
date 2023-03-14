import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent/index'
import Navbar from '../../components/NavbarComponent/index'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
// import {API_URL} from '../../utils/index'
// import axios from 'axios'
import { GetProjectId } from '../../redux/project/index'

function MorePage() {
    const navigate = useNavigate()
    const HandleItem = () => {
        navigate('/')
    }
    const dispatch = useDispatch()
    const dataGetProject = useSelector(state => state.project)
    useEffect(() => {
        dispatch(GetProjectId(window.localStorage.getItem('moreId')))
    },[])
    console.log(dataGetProject)
    return(
        <div className="MorePage">
            <Navbar/>
            <div className="MorePageBox">
                <div className="MoreExitBox" onClick={HandleItem}><i className='fa-solid fa-arrow-left'></i></div>
                <div className="MoreInbox">
                    <ul>
                        {dataGetProject.getProjectId.Success == true ? dataGetProject.getProjectId?.Data.map((elem, index) =>
                            <li key={index}>
                                <h2>{elem.id}</h2>
                            </li>)
                        : dataGetProject.getProjectId.Loading == true ? <i class="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataGetProject.getProjectId.Error == true ? <h3 className='Error'><i class="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                    </ul>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default MorePage