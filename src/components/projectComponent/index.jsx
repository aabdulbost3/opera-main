import "./style.css"
import { useEffect, useState } from "react";
function ProjectComponent() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("http://localhost:8000/projectComponent")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) { setData(myJson); });
    };
    useEffect(() => { getData(); }, [data]);


    return (
        <div className="projectComp">
            <div className="container">
                <h1>Bajarilgan ishlar</h1>
                <ul>
                    {data.map((post) => {
                        return (
                            <li key={post.id}>
                                <button value={post.id}></button>
                                <img src={post.imgSrc} alt="EROR401" />
                                <h4>{post.title}</h4>
                            </li>
                        );
                    })}
                </ul>
                <button>Barchasini ko'rish</button>
            </div>
        </div>
    )
}
export default ProjectComponent