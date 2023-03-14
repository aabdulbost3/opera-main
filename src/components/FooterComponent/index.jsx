import './style.css';
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
function FooterComponent() {
    const { t, i18n } = useTranslation();
    const navlink = useNavigate();
    const HandleNav = () => {
        navlink('admin')
    }
  return (
    <div className="FooterComponent" id="2">
        <h1>{t("Footer.0")}</h1>
        <p>{t("Footer.1")}</p>
        <div className="FooterCompBox">
            <div className="FooterCompTexts">
                <h2>+998 99 020 52 60</h2>
                <h4 onClick={HandleNav}>{t("Footer.2")}:</h4>
                <p>{t("Footer.3")}</p>
                <div className="FooterCompIcons">
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-telegram'></i>
                </div>
            </div>
            <form className="FooterCompInbox">
                <input type="text" placeholder='Ism/Familiya' className='ins'/>
                <input type="tel" placeholder='+998 (__) _ _ _-_ _-_ _' className='ins'/>
                <textarea className='ins' placeholder='Enter a message'></textarea>
                <button>{t("Footer.4")}</button>
            </form>
        </div>
    </div>
  );
}

export default FooterComponent;