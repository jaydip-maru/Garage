import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";
import './SignUp.css'
import Navbar from "../../Navbar";
import imgSignup from "/signup.webp"



export default function SignUp() {
  const navigate = useNavigate();

  
  let [fromData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleError = (err) => {
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
    });
  };
  const handleSuccess = (msg) => {
    toast.success(msg);
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
    event.preventDefault();
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
      ...fromData,
    },{
      withCredentials: true
    }
  );
   
    const { success, message } = data;
   
    if (success) {
      // login({ email: data.user.email,username: data.user.username,id: data.user.id,isMec: data.user.isMec });
      
      handleSuccess(message);
      setTimeout(() => {
        localStorage.setItem("email", fromData.email);
        navigate("/Otpverify");
      }, 1000);
      setFormData({
        email: "",
        username: "",
        password: "",
      });
    } else {
      handleError(message);
    }

  };
  return (
    <>
    <Navbar color="#feb993" />
<div className="main">
    <div className="Hero-signup">
     
      <div className="img-signup">
        <div className="overlay-signup"></div>
        <img className="img-sign" src={imgSignup} alt="" />
      </div>
        <div className="form-signup"> 
          <form action="form-list" onSubmit={hendleSubmit}>
          <h2 className="hadding-signup">DASHEV GARAGE</h2>

          <label className="form-lable" htmlFor="email">email</label>
          <input className="form-input"
            type="email"

            name="email"
            onChange={handleInputChange}
            value={fromData.email}
          placeholder="What's your email"

          />

          <label className="form-lable" htmlFor="username">username</label>
          <input className="form-input"
            type="text"
            name="username"
            onChange={handleInputChange}
            value={fromData.username}
          placeholder="Add UserName"

          />

          <label className="form-lable" htmlFor="password">password</label>
          <input className="form-input"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={fromData.password}
          placeholder="Enter New PassWord"

          />

          <button className="button-sign mt-5">Create account</button>
        <p className="para-signup">if you have account <Link to="/login">Login here!</Link> </p>

        </form>
      </div>
    </div>

</div>
      <ToastContainer />
    </>
  );
}
