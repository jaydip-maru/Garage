import "./WhatProblemSolve.css"
import {Link} from "react-router-dom";
import {  Parallax } from "react-scroll-parallax";


function WhatProblemSolve() {
    return ( <>
     <Parallax
  translateY={[-11,1 ]}
  opacity={[-1, 5]}

 
>
        <div>
            <h2 className="head-Prob">We Solve a Problem Of On Road Breakdown Vehicle.</h2>
        </div>
        
    <div className="wrapper-prob">
        <div className="sidebar-prob">
            <h3 className="sider-prob">
            with our solution process, we solve you problem in step by step process
            </h3>
            <Link className="download-Prob">Download our App</Link>
        
        </div>
        <div className="content-prob">
       
            <Steps  number={1} dect="You Book An Appointment"/>
            <Steps  number={2} dect="Find Your Location"/>
            <Steps  number={3} dect="Find Nearest Garage Acording To Location"/>
            <Steps  number={4} dect="Your Appointment Assint to a Nearest Garage"/>
            <Steps  number={5} dect="Garage man Take a Assitment"/>
            <Steps  number={6} dect="Garage man Come to repair your vehical"/>
      <Link to="/bookNow"><button className="appoit-btn">Get Appoitment Now</button></Link>      

        </div>
    </div>
    </Parallax>
    </> );
}


function Steps({number, dect}) {
    return ( <>
         <div className="wrapper-step">
            <div className="num-wrap">
            <p className="num ">{number}</p>
            <div class="vertical-line"></div>
            </div>
            <div className="dec-wrap">
            <p className="des">{dect}</p>
            <hr  className="hori-line"/>
            </div>
            <hr />
        </div>

    </> );
}

export default WhatProblemSolve;