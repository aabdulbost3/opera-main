import { GetMessage } from "../../../redux/message";
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './style.css';

function Message() {
  const CopiedMes = useRef()
  const dispatch = useDispatch()
  const dataMessage = useSelector(state => state.message)
  useEffect(() => {
    dispatch(GetMessage())
  },[])
  const HandleCopy = (e) => {
    var textField = document.createElement('textarea')
    textField.innerText = e.target.value
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    CopiedMes.current.style.display = 'block'
    setTimeout(() => {
      CopiedMes.current.style.display = 'none'
    }, 4000)
  }
  return (
    <div className="Message">
      <h1><i className="fa-solid fa-message"></i> Messages</h1>
      <ul>
        {dataMessage.getMessage.Success == true ? 
        dataMessage.getMessage?.Data.data.data.length > 0 ?
        dataMessage.getMessage?.Data.data.data.map((elem, index) =>
          <li key={index}>
            <h4>{elem.fullName}</h4>
            <h5 onClick={HandleCopy} value={elem.phone}>{elem.phone}</h5>
            <p>{elem.message}</p>
          </li>) : <h2>No Messages Here Yet!</h2>
          : dataMessage.getMessage.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataMessage.getMessage.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
      </ul>
      <div ref={CopiedMes} className="CopiedMessage"><i className="fa-solid fa-file"></i> Number copied to clipboard.</div>
    </div>
  );
}

export default Message;