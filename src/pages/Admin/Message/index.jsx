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
  console.log(dataMessage.getMessage?.Data);
  return (
    <div className="Message">
      <h1><i className="fa-solid fa-message"></i> Messages</h1>
      <ul>
        {dataMessage.getMessage.Success == true ? 
        dataMessage.getMessage?.Data.data.data.length > 0 ?
        dataMessage.getMessage?.Data.data.data.map((elem, index) =>
          <li key={index}>
            <h4>{elem.fullName}</h4>
            <h5>{elem.phone}</h5>
            <p>{elem.message}</p>
          </li>) : <h2>No Messages Here Yet!</h2>
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
            <p>Nima Gapds fsd fsdfdf sgsdf</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapf   sd gsd fsdhk ghdk jghj shfjk asdgf jksd fgsd kjg</p>
          </li>
          <li>
            <div className="MessageTexts">
              <h4>Abdulloh</h4>
              <button onClick={HandleCopy} value="+998930704354">+998930704354</button>
            </div>
            <p>Nima Gapf sdgs dfs dhkg hdk jghj  s h f  jk asd gfjksd fgsdkjg</p>
          </li>
      </ul>
      <div ref={CopiedMes} className="CopiedMessage"><i className="fa-solid fa-file"></i> Number copied to clipboard.</div>
    </div>
  );
}

export default Message;