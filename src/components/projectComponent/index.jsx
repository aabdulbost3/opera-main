import axios from "axios"
import { useEffect } from "react";
import { API_URL } from "../../utils/api"
import "./style.css"
import img from "../../windows.jpg"

function ProjectComponent(props) {
    // useEffect(()=> {

    // },[])
    return(
        <div className="projectComp">
            <div className="container">
                <h1>Bajarilgan ishlar</h1>
                <ul>
                    <li>
                        <button value="1"></button>
                        <img src={img} alt="img" />
                        <h4>Another title</h4>
                    </li>
                    <li>
                        <button value="1"></button>
                        <img src={img} alt="img" />
                        <h4>Another title</h4>
                    </li>
                    <li>
                        <button value="1"></button>
                        <img src={img} alt="img" />
                        <h4>Another title</h4>
                    </li>
                    <li>
                        <button value="1"></button>
                        <img src={img} alt="img" />
                        <h4>Another title</h4>
                    </li>
                    <li>
                        <button value="1"></button>
                        <img src={img} alt="img" />
                        <h4>Another title</h4>
                    </li>
                    <li>
                        <button value="1"></button>
                        <img src={img} alt="img" />
                        <h4>Another title</h4>
                    </li>
                    {/* {data.map(e => {
                        <li key={e.id}>
                            <button value={e.id}></button>
                            <img src={e.img} alt="img" />
                            <h4>{e.title}</h4>
                        </li>
                    })} */}
                </ul>
                <button>Barchasini ko'rish</button>
            </div>
        </div>
    )
}
export default ProjectComponent