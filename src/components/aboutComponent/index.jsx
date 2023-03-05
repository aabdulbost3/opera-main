import { useRef } from "react"
import "./style.css"
import { useTranslation } from "react-i18next";
function AboutComponent() {
    const { t, i18n } = useTranslation();
    const modal = useRef()
    const closeModalBtn = useRef()
    const closeOverlayBtn = useRef()
    const openModal = () => {
        modal.current.style.top = '10%'
        modal.current.style.display = 'block'
        closeModalBtn.current.style.display = 'block'
        closeOverlayBtn.current.style.display = 'block'
    }
    const closeModal = () => {
        modal.current.style.top = '100%'
        modal.current.style.display = 'block'
        closeModalBtn.current.style.display = 'none'
        closeOverlayBtn.current.style.display = 'none'
    }
    return (
        <div className="aboutComp">
            <i onClick={closeModal} ref={closeModalBtn} className="fa-solid fa-xmark overP"></i>
            <div onClick={closeModal} ref={closeOverlayBtn} className="overlay"></div>
            <div ref={modal} className="aboutModal">
                <div>
                    <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675861456/OPERA_olbqhc.png" alt="img" />
                    <h1>{t("aboutComp.0")}</h1>
                    <p>{t("aboutComp.1")}</p>
                    <p>{t("aboutComp.1")}</p>
                    <h2>{t("aboutComp.2")}:</h2>
                    <p>— {t("aboutComp.3")}</p>
                    <h2>{t("aboutComp.4")}:</h2>
                    <p>— {t("aboutComp.5")}</p>
                    <p>— {t("aboutComp.6")}</p>
                    <p>— {t("aboutComp.7")}</p>
                    <h2>{t("aboutComp.8")}:</h2>
                    <p>— {t("aboutComp.9")};</p>
                    <p>— {t("aboutComp.10")};</p>
                    <p>— {t("aboutComp.11")};</p>
                    <p>— {t("aboutComp.12")}</p>
                </div>
            </div>
            <div className="container">
                <h1>{t("Navbar.1")}</h1>
                <p>{t("aboutComp.13")}</p>
                <button className="i12kkerd" onClick={openModal}>{t("aboutComp.14")}</button>
            </div>
        </div>
    )
}
export default AboutComponent