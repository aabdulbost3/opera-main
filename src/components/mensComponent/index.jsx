import "../helpComponent/style.css"
import img from "../../../src/windows.jpg"
import { useTranslation } from "react-i18next";
export function MensComponent() {
    const { t } = useTranslation();
    return(
        <div className="helpComp">
            <div className="container">
                <marquee width="100%" direction="right" height="30%"  scrollamount="20">
                {t("MensComponent.0")}
                </marquee>
                <ul>
                    <li>
                        <img src={img} alt="img" />
                        <h3>Aliyev Vali</h3>
                        <p>qoyillatib qoyishgan</p>
                    </li>
                    <li>
                        <img src={img} alt="img" />
                        <h3>Valiyev Ali</h3>
                        <p>qoyillatib qoyishgan</p>
                    </li>
                    <li>
                        <img src={img} alt="img" />
                        <h3>Ali Valiyevich</h3>
                        <p>qoyillatib qoyishgan</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}