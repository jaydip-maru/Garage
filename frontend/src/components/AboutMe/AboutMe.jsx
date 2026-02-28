import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Hero from "../DashBoard/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import "./Aboutme.css";
import ProblemSolution from "./ProblemSolution";
import jay from "/myPhoto.png"

function AboutMe() {
    return ( <>
    <Navbar  color="pink"/>
    <ParallaxProvider>
        <Hero img="https://www.garageliving.com/hubfs/Reflect-hero-Garage-Living-Designer-Series-2024-update.jpg" text="About Me" />

        <ProblemSolution />

        <section className="about-section" id="about">
      <div className="about-container">
        

        <div className="about-left">
          <img
            src={jay}
            alt="profile"
            className="about-img"
          />
        </div>


        <div className="about-right">
          <h2>About Me</h2>

          <p>
            Hello! I'm <strong>Jaydip</strong>, a passionate engineering student
            and aspiring full-stack developer. I enjoy building real-world
            solutions using modern web technologies and continuously improving
            my problem-solving skills.
          </p>

          <p>
            Currently, I am focusing on <strong>MERN Stack development</strong>
            and working on practical projects like a real-time garage service
            platform that connects users with nearby mechanics. My goal is to
            create impactful applications that solve everyday problems.
          </p>

          <p>
            I am also interested in fast-growing tech fields and actively
            learning JavaScript, React, backend development, and system design.
            I love participating in hackathons and tech communities to grow my
            skills and network.
          </p>


          <div className="about-details">
            <div><span>Name:</span> Jaydip Maru</div>
            <div><span>Role:</span> Full Stack Developer</div>
            <div><span>Skills:</span> React, Node.js, MongoDB, JavaScript</div>
            <div><span>Location:</span> India</div>
          </div>

          <button className="about-btn">Download Resume</button>
        </div>
      </div>
    </section>

    <Footer />
    </ParallaxProvider>
    </> );
}

export default AboutMe;