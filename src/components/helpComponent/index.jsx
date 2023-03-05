import "./style.css"
import img from "../../../src/windows.jpg"
import { useTranslation } from "react-i18next";
export function HelpComponent() {
const { t, i18n } = useTranslation();
    return(
        <div className="helpComp">
            <div className="container">
                <div className="titleBox">
                    <h1>{t("HelpComponent.0")}</h1>
                    <h1>{t("HelpComponent.0")}</h1>
                    <h1>{t("HelpComponent.0")}</h1>
                    <h1>{t("HelpComponent.0")}</h1>
                </div>
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