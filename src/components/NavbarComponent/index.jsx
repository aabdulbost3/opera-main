import { useRef } from 'react';
import './style.css';
import Select from '../Select/Select';
import { useTranslation } from "react-i18next";
function Navbar() {
    const { t, i18n } = useTranslation();
    const barsSide = useRef();
    const btnOpen = useRef();
    const btnClose = useRef();
    const stP = useRef()
    const ndP = useRef()
    const HandleOpenSide = () =>{
        btnClose.current.style.display = 'block'
        btnOpen.current.style.display = 'none'
        barsSide.current.style.transform = 'translateX(0%)'
    }
    const HandleCloseSide = () =>{
        btnClose.current.style.display = 'none'
        btnOpen.current.style.display = 'block'
        barsSide.current.style.transform = 'translateX(-200%)'
    }
    // const Uz = () => {
    //     stP.current.style.color = "var(--gold)";
    //     ndP.current.style.color = "var(--black)";
    // }
    // const Ru = () => {
    //     ndP.current.style.color = "var(--gold)";
    //     stP.current.style.color = "var(--black)";
    // }
  return (
    <>
    <div className="Navbar">
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857963/download_fimwgc.png" alt="" />
        <ul>
            <li><h3><button>{t("Navbar.0")}</button></h3></li>
            <li><h3><button>{t("Navbar.1")}</button></h3></li>
            <li><h3><button>{t("Navbar.2")}</button></h3></li>
            <li><h3><button>{t("Navbar.3")}</button></h3></li>
            <li>
                <Select/>
            </li>
        </ul>
    </div>
    <div className="BarsNav">
        <button onClick={HandleOpenSide} ref={btnOpen}><i className='fa-solid fa-bars'></i></button>
        <button onClick={HandleCloseSide} className='HandleCloseSide' ref={btnClose}><i className='fa-solid fa-bars'></i></button>
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857963/download_fimwgc.png" alt="" />
    </div>
    <div className="BarsSide" ref={barsSide}>
        <ul>
            <li><h3><button>{t("Navbar.0")}</button></h3></li>
            <li><h3><button>{t("Navbar.1")}</button></h3></li>
            <li><h3><button>{t("Navbar.2")}</button></h3></li>
            <li><h3><button>{t("Navbar.3")}</button></h3></li>
            <li>
                <Select/>
            </li>
        </ul>
    </div>
    </>
  );
}

export default Navbar;