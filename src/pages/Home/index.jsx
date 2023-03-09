import AboutComponent from "../../components/aboutComponent/index";
import FooterComponent from "../../components/FooterComponent";
import Header from "../../components/HeaderComponent/index";
import { HelpComponent } from "../../components/helpComponent";
import { MensComponent } from "../../components/mensComponent";
import Navbar from "../../components/NavbarComponent/index";
import ProjectComponent from "../../components/projectComponent/index";
import "./style.css"
import { useRef } from 'react';

 function Home() {
    const OpenModalUp = useRef()
    const ModalTel = useRef()
    const CloseModalUp = useRef()
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
    const HandleSubmt = () => {
        OpenModalUp.current.style.display = 'block'
        CloseModalUp.current.style.display = 'none'
        ModalTel.current.style.transform = 'scale(0)'
    }
    return (
        <div className="Home">
            <Navbar />
            <Header />
            <AboutComponent />
            <ProjectComponent number="6" button="true" />
            <HelpComponent />
            <MensComponent />
            <FooterComponent />
            <button onClick={OpenModal} ref={OpenModalUp} className='Tel'><i className='fa-solid fa-phone-volume'></i></button>
            <button onClick={CloseModal} ref={CloseModalUp} className='TelUp'><i className='fa-solid fa-xmark'></i></button>
            <form className='modalTel' onSubmit={HandleSubmt} ref={ModalTel}>
                <h3>Telefon raqamingizni qoldiring va biz sizga tez orada aloqaga chiqamiz</h3>
                <input placeholder='Ismingizni kiriting.' required type="text" />
                <input placeholder='+998 (__) _ _ _-_ _-_ _' required type="tel" />
                <button type='submit'>Yuborish</button>
                <p>Yoki siz bizga o'zingaz aloqaga chiqishingiz mumkin</p>
                <h4>+99893 535 00 44</h4>
            </form>
        </div>
    )
}

export default Home