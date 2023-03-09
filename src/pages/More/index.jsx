import FooterComponent from '../../components/FooterComponent/index'
import Navbar from '../../components/NavbarComponent/index'
import './style.css'

function MorePage() {
    return(
        <div className="MorePage">
            <Navbar/>
            <div className="MorePageBox">
                <div className="MoreExitBox"><i className='fa-solid fa-arrow-left'></i></div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default MorePage