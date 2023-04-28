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
        {dataMessage.getMessage.Success == true ? dataMessage.getMessage?.Data.map((elem, index) =>
          <li key={index}>
            <div className="MessageTexts">
              <h4>{elem.title}</h4>
              <button onClick={HandleCopy} value={elem.phone}>{elem.phone}</button>
            </div>
            <p>{elem.text}</p>
          </li>)
          : dataMessage.getMessage.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataMessage.getMessage.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998946197791">+998946197791</button>
            </div>
            <p>Nima Gap</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998903985853">+998903985853</button>
            </div>
            <p>Nima Gapdsfsdfsdfdfsgsdf</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapfsdgsdfsdhkghdkjghjshfjkasdgfjksdfgsdkjg</p>
          </li>
      </ul>
      <div ref={CopiedMes} className="CopiedMessage"><i className="fa-solid fa-file"></i> Text copied to clipboard.</div>
    </div>
  );
}

export default Message;