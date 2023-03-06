import React from 'react'
import "./PortfolioMap.css"
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
function PortfolioMap() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch(" https://api.npoint.io/5e3cd718257a85ae5a19/projectComponent")
            .then(function (response) {
                return response.json();
            }).then(function (myJson) { setData(myJson); });
    };
    useEffect(() => { getData(); }, [data]);
  return (
    <div className='PortfolioMap'>
      <h2 className='PortfolioMapH2'>Portfolio</h2>
        <div className="projectCompp">
            <ul>
                {data.map((post) => {
                    return (
                        <li key={post.id}>
                            <NavLink to={post.link}>
                            <button value={post.id}></button>
                            <img src={post.imgSrc} alt="EROR401" />
                            <h4>{post.title}</h4>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
  )
}

export default PortfolioMap
