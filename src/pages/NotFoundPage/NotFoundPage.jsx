import React from "react";
import "./NotFoundPage.css";
import Navbar from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import { useTranslation } from "react-i18next";
function NotFoundPage() {
  const { t, i18n } = useTranslation();
  return (
    <div className="NotFoundPage">
      <Navbar />
      <div className="NotFoundPagee">
        <h2>{t("NotFoundPage.0")}</h2>
        <h2>{t("NotFoundPage.1")}</h2>
        <h2>{t("NotFoundPage.2")}</h2>
      </div>
      <FooterComponent />
    </div>
  );
}
export default NotFoundPage;
