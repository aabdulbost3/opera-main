import "../helpComponent/style.css"
import img from "../../../src/windows.jpg"

export function MensComponent() {
    return(
        <div className="helpComp">
            <div className="container">
                <div className="titleBox">
                    <h1>BIZGA ISHONISHADI</h1>
                    <h1>BIZGA ISHONISHADI</h1>
                    <h1>BIZGA ISHONISHADI</h1>
                    <h1>BIZGA ISHONISHADI</h1>
                    <h1>BIZGA ISHONISHADI</h1>
                </div>
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