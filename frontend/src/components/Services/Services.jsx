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

function Services() {
  return (
    <>
    <Navbar color="	#f9b49b" />
      <div className="Services">
        <ParallaxProvider>
          <Hero
          img="https://images.unsplash.com/photo-1551522435-a13afa10f103?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyYWdlfGVufDB8fDB8fHww"
            text="Services"
          />
          <div className="Other-section">
            <VehicleSection className="mt-0" />
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
