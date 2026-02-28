import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";
import './SignUp.css'
import Navbar from "../../Navbar";

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
    console.log(fromData);
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
      ...fromData,
    },{
      withCredentials: true
    }
  );
    setFormData({
      email: "",
      username: "",
      password: "",
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
  };
  return (
    <>
    <Navbar color="#feb993" />
<div className="main">
    <div className="Hero">
     
      <div className="img-signup">
        <div className="overlay-sign"></div>
        <img className="img-sign" src="https://thumbs.dreamstime.com/b/car-fixing-garage-27814540.jpg" alt="" />
      </div>
        <div className="form"> 
          <form action="form-list" onSubmit={hendleSubmit}>
          <h2 className="hadding">Get Started Now</h2>

          <label className="form-lable" htmlFor="email">email</label>
          <input className="form-input"
            type="text"
            name="email"
            onChange={handleInputChange}
            value={fromData.email}
          placeholder="Email"

          />

          <label className="form-lable" htmlFor="username">username</label>
          <input className="form-input"
            type="text"
            name="username"
            onChange={handleInputChange}
            value={fromData.username}
          placeholder="UserName"

          />

          <label className="form-lable" htmlFor="password">password</label>
          <input className="form-input"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={fromData.password}
          placeholder="PassWord"

          />

          <button className="button mt-5">Signup</button>
        <p className="para-log">if you have account <Link to="/login">Login</Link> here!</p>

        </form>
      </div>
    </div>

</div>
      <ToastContainer />
    </>
  );
}
