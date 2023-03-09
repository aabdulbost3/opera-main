import React from 'react'
import "./Select.css"
function Select() {
    const selectChange = async (e) => {
        await window.localStorage.setItem("OperaLang", e.target.value)
        window.location.reload();
    }
    function GetLanguage() {
        return window.localStorage.getItem("OperaLang")
    }
    return (
        <>
            <div className="selecy">
                {GetLanguage() === "ru" ?
                    <div>
                        <button onClick={selectChange} value="ru">RU</button>
                        <button onClick={selectChange} value="uz">UZ</button>
                    </div>:
                        GetLanguage() === "uz" ?
                    <div>    
                        <button onClick={selectChange} value="uz">UZ</button>
                        <button onClick={selectChange} value="ru">RU</button>
                    </div> : null
                }
            </div>
        </>
    )
}

export default Select
