import { GetMessage } from "../../../redux/message";
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './style.css';

function Message() {
  const dispatch = useDispatch()
  const dataMessage = useSelector(state => state.message)
  useEffect(() => {
    dispatch(GetMessage())
  },[])
  console.log(dataMessage.getMessage?.Data);
  return (
    <div className="Message">
      <h1>Messages</h1>
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
      </ul>
    </div>
  );
}

export default Message;