import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Contect from "../DashBoard/Contect";
import Hero from "../DashBoard/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import imgContact from "/contect.webp"


function ContectMain() {
    return ( <>
    <Navbar  color="	#f9e9de" />
    <ParallaxProvider >
        <Hero img={imgContact} text="Contect" />
        <div className="Other-section">
        <Contect />
        </div>
    </ParallaxProvider>
<Footer />
    </> );
}

export default ContectMain;