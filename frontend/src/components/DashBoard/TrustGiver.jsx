import "./TrustGiver.css";
import { Link } from "react-router-dom";
import {  Parallax } from "react-scroll-parallax";


function TrustGiver() {
  return (
    <>
    <Parallax
  translateY={[5, 0]}
  opacity={[-2, 5]}
  easing="easeOutCubic"
 
>
      <div class="wrapper">
        <div class="sidebar ">
          <div className="content-Trust">
            <h1 className="hedding-trust">
              Delivering Trust and Excellence on Every Visit
            </h1>
            <p className="detail-trust">
              We take pride in maintaining professional workspace, with
              dedicated areas for servicing, repairs, and bodywork to meet all
              your needs.
            </p>
            <Link className="detail-link" to="/service">Show More Service</Link>
          </div>
        </div>
        <div class="content">
          <TrustSectionImage img="https://thumbs.dreamstime.com/b/two-mechanics-fixing-car-road-35981984.jpg" text="We Provide a user to Get Appoitment of GarageMen At a Time When a they scutst onrode" color="gray" />
          <TrustSectionImage img="https://www.shutterstock.com/image-photo/happy-smile-caucasian-young-male-600nw-2631696015.jpg" text="We Provide a user to Get Appoitment of GarageMen At Home" color="orange" />
          <TrustSectionImage img="https://as1.ftcdn.net/jpg/05/55/66/90/1000_F_555669058_Cj9rCX34DDrMOlHENhz06bgxVkg0nao4.jpg" text="We Provide a user to Get Appoitment of Vehical Washer" color="green" />
         
        </div>
      </div>
      </Parallax>
    </>
  );
}

export default TrustGiver;


function TrustSectionImage({img,text,color}) {
  return ( <>
    <div className="img-divition">
            <Link to="/bookNow">
              
              <img
                className="img-trust "
                src={img}
                alt=""
              />
            <div className="overlay-img">
              <p>{text}</p>
            </div>
            </Link>
          </div>
  </> );
}
