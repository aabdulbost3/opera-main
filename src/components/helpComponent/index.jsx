import "./style.css"
import img from "../../../src/windows.jpg"
import { useTranslation } from "react-i18next";
export function HelpComponent() {
const { t } = useTranslation();
    return(
        <div className="helpComp">
            <div className="container">
                    <marquee width="100%" direction="right" height="30%"  scrollamount="20">
                    {t("HelpComponent.0")}
                    </marquee>
                <ul>
                    <li>
                        <img src={img} alt="img" />
                        <h3>{t("HelpComponent.1")}</h3>
                    </li>
                    <li>
                        <img src={img} alt="img" />
                        <h3>{t("HelpComponent.2")}</h3>
                    </li>
                    <li>
                        <img src={img} alt="img" />
                        <h3>{t("HelpComponent.3")}</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}