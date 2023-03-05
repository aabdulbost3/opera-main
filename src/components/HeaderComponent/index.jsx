import './style.css';
import { useTranslation } from "react-i18next";
function Header() {
const { t, i18n } = useTranslation();
  return (
    <div className="Header">
        <div className="HeaderBox">
        <div className="HeaderInbox">
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1677329603/IMG_20230225_175225_045_jhpksg.jpg" alt="" />
        <p>{t("Header.0")}</p>
        </div>
        <img className='HeaderImg' src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857922/cdvfdefvedf_lqcync.webp" alt="" />
        </div>
    </div>
  );
}

export default Header;