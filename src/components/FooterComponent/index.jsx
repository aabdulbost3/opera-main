import './style.css';
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useRef } from 'react';
import { PostMessage } from "../../redux/message";
import { useDispatch, useSelector } from "react-redux";
function FooterComponent() {
    const { t, i18n } = useTranslation();
    const navlink = useNavigate();
    const MesName = useRef()
    const MesPhone = useRef()
    const MesMessage = useRef()
    const dispatch = useDispatch()
    const dataMessage = useSelector(state => state.message)
    const HandleNav = () => {
        navlink('admin')
    }
    const Post = (e) => {
        e.preventDefault()
        const body = {
            title: MesName.current.value,
            phone: MesPhone.current.value,
            text: MesMessage.current.value
        }
        dispatch(PostMessage(body))
        MesName.current.value = null
        MesPhone.current.value = null
        MesMessage.current.value = null
    }
    return (
        <div className="FooterComponent" id="2">
            {dataMessage.postMessage.Success == true ?
                <div className="MessageModal">
                    <div className="MessageModTex   tBox">
                        <h3 className='MessageTitle'>{t("Message.4")}</h3>
                        <p className='MessageText'>{t("Message.5")}</p>
                    </div>
                    <i className="fa-sharp fa-regular fa-face-smile"></i>
                </div> : dataMessage.postMessage.Error == true ?
                    <div className="ErrorMessageModal">
                        <div className="ErrorMessageModText">
                            <h3 className='ErrorMessageModalTitle'>{t("Message.6")}</h3>
                            <p className='ErrorMessageModalText'>{t("Message.7")}</p>
                        </div>
                        <i className="fa-sharp fa-regular fa-face-frown-open"></i>
                </div> : null}
            <h1>{t("Footer.0")}</h1>
            <p className='FooterComP'>{t("Footer.1")}</p>
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
                <form className="FooterCompInbox" onSubmit={Post}>
                    <input type="text" ref={MesName} placeholder={t("Message.0")} className='ins' />
                    <input type="tel" ref={MesPhone} placeholder='+998 (__) _ _ _-_ _-_ _' className='ins' />
                    <textarea ref={MesMessage} className='ins' required placeholder={t("Message.1")}></textarea>
                    <button type='submit'>{t("Footer.4")}</button>
                </form>
            </div>
        </div>
    );
}

export default FooterComponent;