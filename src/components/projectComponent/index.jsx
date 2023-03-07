import "./style.css"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GetProject } from "../../redux/project"; 
import { useSelector, useDispatch } from "react-redux";

function ProjectComponent() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const dataProject = useSelector(state => state.project)
    useEffect(() => {
        dispatch(GetProject())
    },[])
    return (
        <div className="projectComp">
                <h1>{t("Navbar.2")}</h1>
                {dataProject.getProject.Success == true ? dataProject.getProject?.Data.map((elem, index) => 
                    <li key={index}>
                        <img src={elem.mainImg} alt="img" />
                        <h3>{elem.title}</h3>
                    </li>)
                :dataProject.getProject.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataProject.getProject.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
                <button>{t("ProjectComponent.0")}</button>
        </div>
    )
}
export default ProjectComponent