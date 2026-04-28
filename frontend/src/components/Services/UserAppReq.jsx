
import { useState,useEffect } from "react";
import { useAuth } from "../../Providers/AuthContext";

import Navbar from "../../Navbar";
import socket from "../../socket";
import {ToastContainer, toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import "./UserAppReq.css"
import Footer from "../../Footer"



function UserAppReq() {
  const navigate = useNavigate();
  const {user} = useAuth();



  let [fromData, setFormData] = useState({
    problem: "",
    location: ""
  });


  const hendelSuccess = (msg) => {
    toast.success(msg);
  }
  
    


    const requestMechanic = (event) => {
    event.preventDefault();

      socket.emit("request-mechanic", {
        problem: fromData.problem,
        location: fromData.location,
      });
      setFormData({
        problem: "",
        location: ""
      });
      hendelSuccess("Request sended to a Mechanics");
    };
    
    socket.on("service-confirmed", () => {
      // alert("Mechanic accepted!");
      hendelSuccess("Mechanic Accept you request!");
    });
    

    // useEffect(() => {
        
      
    //     if (!user) {
    //       setTimeout(() => {
    //         toast.error("Require a login for Service booking", {
    //           position: "top-right",
    //           autoClose: 5000,
    //         });
    //       },10);
    //       navigate("/login");
        
    //   }
    
    //   }, [user]);


  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newVal = event.target.value;

    setFormData((fromData) => {
      fromData[fieldName] = newVal;
      return { ...fromData };
    });
  };
  

    return (  <>
    <Navbar color="	#9fb6c3" />
    <div>
      <img className="req-img" src="https://storage.googleapis.com/support-forums-api/attachment/message-237576265-6955616305050567035.PNG" alt="" />
    <form className="req-form" action="" onSubmit={requestMechanic}>
    <div className=" mb-3">
          <label
            htmlFor="problem"
            className="form-label col-3 mr-0"
            style={{ width: "20rem" }}
          >
            {" "}
            Problem In Vehical :
          </label>
          <div className="">
            <input
              className="form-control "
              type="text"
              name="problem"
              id="problem"
              value={fromData.problem}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className=" mb-3">
          <label
            htmlFor="location"
            className="form-label col-3 mr-0"
            style={{ width: "20rem" }}
          >
            {" "}
           Location :
          </label>
          <div className="">
            <input
              className="form-control "
              type="text"
              name="location"
              id="location"
              value={fromData.location}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <button className="req-btn">Book Mechanic</button>

    </form>
    </div>
<Footer />
<ToastContainer />
    </>);
}

export default UserAppReq;