import { useRef } from 'react';
import './style.css';

function Navbar() {
    const barsSide = useRef();
    const btnOpen = useRef();
    const btnClose = useRef();
    const stP = useRef()
    const ndP = useRef()
    const HandleOpenSide = () =>{
        btnClose.current.style.display = 'block'
        btnOpen.current.style.display = 'none'
        barsSide.current.style.transform = 'translateX(0%)'
    }
    const HandleCloseSide = () =>{
        btnClose.current.style.display = 'none'
        btnOpen.current.style.display = 'block'
        barsSide.current.style.transform = 'translateX(-200%)'
    }
    const Uz = () => {
        stP.current.style.color = "var(--gold)";
        ndP.current.style.color = "var(--black)";
    }
    const Ru = () => {
        ndP.current.style.color = "var(--gold)";
        stP.current.style.color = "var(--black)";
    }
  return (
    <>
    <div className="Navbar">
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857963/download_fimwgc.png" alt="" />
        <ul>
            <li><h3><button>BOSH SAHIFA</button></h3></li>
            <li><h3><button>BIZ HAQIMIZDA</button></h3></li>
            <li><h3><button>BAJARILGAN ISHLAR</button></h3></li>
            <li><h3><button>KONTAKTLAR</button></h3></li>
            <li>
                <p ref={stP} onClick={Uz}>UZ</p>
                <p ref={ndP} onClick={Ru}>RU</p>
            </li>
        </ul>
    </div>
    <div className="BarsNav">
        <button onClick={HandleOpenSide} ref={btnOpen}><i className='fa-solid fa-bars'></i></button>
        <button onClick={HandleCloseSide} className='HandleCloseSide' ref={btnClose}><i className='fa-solid fa-bars'></i></button>
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857963/download_fimwgc.png" alt="" />
    </div>
    <div className="BarsSide" ref={barsSide}>
        <ul>
            <li><h3><button>BOSH SAHIFA</button></h3></li>
            <li><h3><button>BIZ HAQIMIZDA</button></h3></li>
            <li><h3><button>BAJARILGAN ISHLAR</button></h3></li>
            <li><h3><button>KONTAKTLAR</button></h3></li>
            <li>
                <p ref={stP} onClick={Uz}>UZ</p>
                <p ref={ndP} onClick={Ru}>RU</p>
            </li>
        </ul>
    </div>
    </>
  );
}

export default Navbar;