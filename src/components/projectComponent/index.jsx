import "./style.css"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GetProject } from "../../redux/project"; 
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function ProjectComponent(props) {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const dataProject = useSelector(state => state.project)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(GetProject())
    },[])
    const ProjectOptional = (e) => {
        navigate('/more')
        window.localStorage.setItem('moreId', e.target.value)
    }
    return (
        <div className="projectComp">
                <h1>{t("Navbar.2")}</h1>
                <ul>
                {dataProject.getProject.Success == true ? dataProject.getProject?.Data.data.data.map((elem, index) => 
                    <li key={index}>
                        <button value={elem.id} onClick={ProjectOptional}></button>
                        <img src={elem.img} alt="img" />
                        <h4>{elem.title}</h4>
                    </li>)
                :dataProject.getProject.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                {props.button == "true" ? <button onClick={() => window.location.href = '/Portfolio'} class="NavLink" to="/portfolio">{t("ProjectComponent.0")}</button> : null}
                </ul>
        </div>
    )
}
export default ProjectComponent