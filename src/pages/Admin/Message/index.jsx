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
  return (
    <div className="Message">
      <h1>Messages</h1>
      <ul>
        {dataMessage.getMessage.Success == true ? dataMessage.getMessage?.Data.map((elem, index) =>
          <li key={index}>
            <h4>{elem.name}</h4>
            <h5>{elem.email}</h5>
            <p>{elem.message}</p>
          </li>)
          : dataMessage.getMessage.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataMessage.getMessage.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
      </ul>
    </div>
  );
}

export default Message;