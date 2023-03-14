import AboutComponent from "../../components/aboutComponent/index";
import telComponent from "../../components/telComponent/index";
import FooterComponent from "../../components/FooterComponent";
import Header from "../../components/HeaderComponent/index";
import { HelpComponent } from "../../components/helpComponent";
import { MensComponent } from "../../components/mensComponent";
import Navbar from "../../components/NavbarComponent/index";
import ProjectComponent from "../../components/projectComponent/index";
import "./style.css"

 function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Header />
            <AboutComponent/>
            <ProjectComponent number="6" button="true" />
            <HelpComponent />
            <MensComponent />
            <FooterComponent />
            <telComponent/>
        </div>
    )
}

export default Home