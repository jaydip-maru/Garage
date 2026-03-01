import BookApoitNow from './BookApoitNow';
import Hero from './Hero';
import { ParallaxProvider } from "react-scroll-parallax";
import TrustGiver from './TrustGiver';
import "./DashBoard.css"
import WhatProblemSolve from './WhatProblemSolve';
import WhoBehindAllOfThat from './WhoBehindAllOfThat';
import Riview from './Review';
import Contect from './Contect';
import Navbar from '../../Navbar';
import { useState, useEffect } from "react";
import axios, { all } from "axios";

import { useAuth } from "../../Providers/AuthContext";
import { useCookies } from "react-cookie";
import {  useNavigate } from "react-router-dom";
import Footer from '../../Footer';
import MecGetService from '../Services/MecGetService';





function DashBoard() {

    const {user,login,logout} = useAuth();
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies(["token"]);

    useEffect(() => {
        const verifyCookie = async () => {
        if(!cookies.token){
          console.log("token is not get");
          navigate("/");
        }
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/verify`,
          {},
          { withCredentials: true }
          );
        
          const {status} = data;
          console.log(status);
    
          return status ? (login({ email: data.email,username: data.username,id: data.id,isMec: data.isMec }) ): (logout());
    
        }
          verifyCookie();
      },[navigate,removeCookie,cookies])
    

    return ( <>
    <Navbar  color="white"/>
<ParallaxProvider>
    <div className='DashBoard'>

<MecGetService />

        <Hero
            img="https://previews.123rf.com/images/uatp2/uatp21310/uatp2131000308/22754977-image-of-a-repair-garage.jpg"

          text="We are With You Every second On Your Way."/>
        <div className='Other-section'>
            
            <TrustGiver  />
            <WhatProblemSolve />
            <WhoBehindAllOfThat />
            <Riview />
            <Contect /> 
        </div>
    </div>
<Footer />
</ParallaxProvider>

    </> );
}

export default DashBoard;
