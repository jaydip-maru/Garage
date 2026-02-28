import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Contect from "../DashBoard/Contect";
import Hero from "../DashBoard/Hero";
import { ParallaxProvider } from "react-scroll-parallax";

function ContectMain() {
    return ( <>
    <Navbar  color="#00dba2" />
    <ParallaxProvider >
        <Hero img="https://thumbs.dreamstime.com/z/modern-auto-repair-garage-tools-equipment-neat-arrangement-view-inside-open-air-workshop-featuring-rows-378751164.jpg" text="Contect" />
        <div className="Other-section">
        <Contect />
        </div>
    </ParallaxProvider>
<Footer />
    </> );
}

export default ContectMain;