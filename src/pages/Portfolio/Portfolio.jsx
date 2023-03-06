import React from 'react'
import "./Portfolio.css"
import PortfolioMap from './PortfolioMap/PortfolioMap';
import Navbar from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
function Portfolio() {
    
    return (
        <div>
            <Navbar/>
            <PortfolioMap/>
            <FooterComponent/>
        </div>
    )
}
export default Portfolio