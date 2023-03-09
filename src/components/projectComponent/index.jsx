import "./style.css"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GetProject } from "../../redux/project"; 
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function ProjectComponent(props) {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const dataProject = useSelector(state => state.project)
    useEffect(() => {
        dispatch(GetProject())
    },[])
    return (
        <div className="projectComp">
                <h1>{t("Navbar.2")}</h1>
                <ul>
                {dataProject.getProject.Success == true ? dataProject.getProject?.Data.slice(0,props.number).map((elem, index) => 
                    <li key={index} value={elem.id} onClick={(e) => {window.location.href = '/more';window.localStorage.setItem("moreId" , e.target.id);}}>
                        <img src={elem.mainImg} alt="img" />
                        <h4>{elem.title}</h4>
                    </li>)
                :dataProject.getProject.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                </ul>
                {props.button == "true" ? <button onClick={() => window.location.href = '/Portfolio'} class="NavLink" to="/portfolio">{t("ProjectComponent.0")}</button> : null}
        </div>
    )
}
export default ProjectComponent