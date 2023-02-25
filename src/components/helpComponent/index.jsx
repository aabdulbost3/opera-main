import "./style.css"
import img from "../../../src/windows.jpg"

export function HelpComponent() {
    return(
        <div className="helpComp">
            <div className="container">
                <div className="titleBox">
                    <h1>XIZMATLAR</h1>
                    <h1>XIZMATLAR</h1>
                    <h1>XIZMATLAR</h1>
                    <h1>XIZMATLAR</h1>
                    <h1>XIZMATLAR</h1>
                </div>
                <ul>
                    <li>
                        <img src={img} alt="img" />
                        <h3>Brending</h3>
                    </li>
                    <li>
                        <img src={img} alt="img" />
                        <h3>Marketing</h3>
                    </li>
                    <li>
                        <img src={img} alt="img" />
                        <h3>Dizayn</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}