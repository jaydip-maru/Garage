import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './SignUp.css'
import Navbar from "../../Navbar";
import "./OtpVerify.css"

function Otpverify() {
    const localemail = localStorage.getItem("email");
      const navigate = useNavigate();
     
    let [fromData, setFormData] = useState({
        email: localemail,
        otp: ""
      });

      const handleSuccess = (msg) => {
        toast.success(msg);
      };

      const handleError = (err) => {
        toast.error(err, {
          position: "top-right",
          autoClose: 5000,
        });
      };

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newVal = event.target.value;
    
        setFormData((fromData) => {
          fromData[fieldName] = newVal;
          return { ...fromData };
        });
      };

      const hendleSubmit = async (event) => {
        try{
        event.preventDefault();
        console.log(fromData);
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/otp/verifyOtp`, {
          ...fromData,
        },{
          withCredentials: true
        }
      );
        setFormData({
          email: "",
          otp: ""
        });
        const { success, message } = data;
       
        if (success) {

          
          handleSuccess(message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          handleError(message);
        }
    }catch(err){
        console.log(err);
    }
      };


      let hendleResend = async() => {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/resendOtp`,{
            email: localemail
        },{
            withCredentials: true
          }
        );

        const { success, message } = data;
       
        if (success) {

          
          handleSuccess(message);
         
        } else {
          handleError(message);
        }
    }
    
    return ( <>
     <>
    <Navbar color="#feb993" />
<div className="main">
    <div className="Hero">
     
    
        <div className="form"> 
          <form action="form-list" onSubmit={hendleSubmit}>
          <h2 className="hadding">DASHEV GARAGE</h2>

          <label className="form-lable" htmlFor="email">OTP</label>
          <input className="form-input"
            type="otp"
            maxLength={6}
            name="otp"
            onChange={handleInputChange}
            value={fromData.otp}
          placeholder="XXXXXX"

          />

          
         

          <button className="button-otp mt-4">Verify otp</button>


        </form>
          <button className="button-otp mt-2" onClick={hendleResend}>resend Otp</button>
      </div>
    </div>

</div>

      <ToastContainer />
    </>
    </> );
}

export default Otpverify;

function OneInput() {
  return ( <>
  <input type="text"  className="oneDig" maxLength={1} minLength={1} placeholder="X" />
  </> );
}

