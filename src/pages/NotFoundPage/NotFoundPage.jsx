import React from "react";
import "./NotFoundPage.css";
import Navbar from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import iconImg from '../../operaIcon.ico'
function NotFoundPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()
  const HandleBack = () => {
    navigate('/')
  }
  return (
    <div className="NotFoundPage">
      <Navbar />
      <div className="NotFoundPagee">
        <h1>4 <img src={iconImg} alt="" /> 4</h1>
        <h3>{t("NotFoundPage.1")}</h3>
        <button onClick={HandleBack}><i className="fa-solid fa-arrow-left"></i><p>{t("NotFoundPage.2")}</p></button>
      </div>
      <FooterComponent />
    </div>
  );
}
export default NotFoundPage;
