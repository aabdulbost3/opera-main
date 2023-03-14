import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent/index'
import Navbar from '../../components/NavbarComponent/index'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
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
    console.log(dataGetProject.getProjectId?.Data);
    return(
        <div className="MorePage">
            <Navbar/>
            <div className="MorePageBox">
                <div className="MoreExitBox" onClick={HandleItem}><i className='fa-solid fa-arrow-left'></i></div>
                    {dataGetProject.getProjectId.Success == true ?
                    <div className="MoreInbox">
                        <span>
                            <img src={dataGetProject.getProjectId?.Data.mainImg} alt="img" />
                            <h2>{dataGetProject.getProjectId?.Data.title}</h2>
                        </span>
                            <div className="Photos">
                                {dataGetProject.getProjectId?.Data.moreImg.map(elem => 
                                    <img key={elem.id} src={elem.img} alt="img" />
                                )}
                            </div>
                    </div>
                    : dataGetProject.getProjectId.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataGetProject.getProjectId.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                </div>
            <FooterComponent/>
        </div>
    )
}

export default MorePage