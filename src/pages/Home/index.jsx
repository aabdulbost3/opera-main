import AboutComponent from "../../components/aboutComponent/index";
import FooterComponent from "../../components/FooterComponent";
import Header from "../../components/HeaderComponent/index";
import { HelpComponent } from "../../components/helpComponent";
import { MensComponent } from "../../components/mensComponent";
import Navbar from "../../components/NavbarComponent/index";
import ProjectComponent from "../../components/projectComponent/index";
import "./style.css"
import { useRef } from 'react';
import { PostMessage } from "../../redux/message";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import axios from "axios";

 function Home() {
    let telegram_bot_id = "5629656427:AAE9AH_xipl7DsRQ16R254UMRLdS7PHlzFE"
    let chat_id = 2065467965
    let name, phone,mes, message;
    let ready = () => {
        name = MesName.current.value
        phone = MesPhone.current.value
        mes = MesMessage.current.value
        message = "🎉Sizga Yangi xabar :\n \n👨‍💼 Ism/Familiya: " + name + "\n📞 Telefon raqami:  " + phone + "\n✉️ Xabar:  " + mes  + "\n \n Hoziroq u bilan aloqaga chiqing"
    }
    let sendtelegram = function() {
        ready();
        axios.post("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", {"chat_id": chat_id,"text": message})
        return false;
    };
    const MesName = useRef()
    const MesPhone = useRef()
    const MesMessage = useRef()
    const OpenModalUp = useRef()
    const ModalTel = useRef()
    const CloseModalUp = useRef()
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();
    const OpenModal = () => {
        OpenModalUp.current.style.display = 'none'
        CloseModalUp.current.style.display = 'block'
        ModalTel.current.style.transform = 'scale(1)'
    }
    const CloseModal = () => {
        OpenModalUp.current.style.display = 'block'
        CloseModalUp.current.style.display = 'none'
        ModalTel.current.style.transform = 'scale(0)'
    }

    const HandleSubmt = (e)=>{
        e.preventDefault();
        sendtelegram();
        const body = {
            title: MesName.current.value,
            phone: MesPhone.current.value,
            text: MesMessage.current.value
        }
        dispatch(PostMessage(body))
        MesName.current.value = null
        MesPhone.current.value = null
        MesMessage.current.value = null

        OpenModalUp.current.style.display = 'block'
        CloseModalUp.current.style.display = 'none'
        ModalTel.current.style.transform = 'scale(0)'
    }
    return (
        <div className="Home">
            <Navbar />
            <Header />
            <AboutComponent/>
            {/* <ProjectComponent number="6" button="true" /> */}
            <HelpComponent />
            <MensComponent />
            <FooterComponent />
            <button onClick={OpenModal} ref={OpenModalUp} className='Tel'><i className='fa-solid fa-phone-volume'></i></button>
            <button onClick={CloseModal} ref={CloseModalUp} className='TelUp'><i className='fa-solid fa-xmark'></i></button>
            <form className='modalTel' onSubmit={HandleSubmt} ref={ModalTel}>
                <h3>{t("Message.3")}</h3>
                <input ref={MesName} placeholder={t("Message.0")} required type="text" />
                <input ref={MesPhone} placeholder='+998 (__) _ _ _-_ _-_ _ ' required type="tel" />
                <textarea ref={MesMessage} className='ins' required placeholder={t("Message.1")}></textarea>
                <button type='submit'>{t("Footer.4")}</button>
                <p>{t("Message.2")}</p>
                <h4>+99893 535 00 44</h4>
            </form>
        </div>
    )
}

export default Home