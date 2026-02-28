import './Hero.css';
import {  Parallax } from "react-scroll-parallax";
import BookApoitNot from "./BookApoitNow";


function Hero({img, text}) {

    return ( <>

      
    <div className="hero h-30">
      <div className='overlay'></div>
        <img className=" img img--1" src={img} alt="" />


        <div className='head-div'>
        <Parallax translateY={[-50, 100]} opacity={[5,-2]} >
        <h1 className='headding' >
          {text}
           
            </h1>
        </Parallax>
        </div>
       
    </div>
    <div className='contant'>
      <div className='overlay1'></div>
    <BookApoitNot  className="book-now-div"/>
    </div>
   


    </> );
}

export default Hero;