import Hero from "../DashBoard/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import WhatProblemSolve from "../DashBoard/WhatProblemSolve";
import "./Services.css";
import TrustGiver from "../DashBoard/TrustGiver";
import Contect from "../DashBoard/Contect";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import VehicleSection from "../DashBoard/VehicleSection";
import ProblemSolution from "../AboutMe/ProblemSolution";
import imgService from "/service.avif"


function Services() {
  return (
    <>
    <Navbar color="	#f9b49b" />
      <div className="Services">
        <ParallaxProvider>
          <Hero
          img={imgService}
                      text="Services"
          />
          <div className="Other-section">

            <WhatProblemSolve />
            <ProblemSolution className="mt-0" />
            <div></div>
            <TrustGiver />
            <div className="p-5"><h1 className="p-5">List Of All Services Which is Provided By Us</h1></div>
            <Contect />
          </div>
        </ParallaxProvider>
      </div>
            <Footer />
    </>
  );
}

export default Services;
