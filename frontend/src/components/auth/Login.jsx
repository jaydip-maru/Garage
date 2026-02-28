import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";
import Navbar from "../../Navbar";
import { useAuth } from "../../Providers/AuthContext";


function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  
  let [userData, setUserData] = useState({
    email: "",
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

    setUserData((userData) => {
      userData[fieldName] = newVal;
      return { ...userData };
    });
  };

  let hendleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          ...userData,
        },
        { withCredentials: true }
      );
      const { success, message } = data;

      if (success) {
        login({ email: userData.email,username: data.username,id: data.id,isMec: data.isMec });
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar color="#deeee6" />
      <div>
        <div className="hero-login">
          <div className="form-log">
            <h3 className="Login-haadding">Login</h3>
            <form className="form-list-log" action="" onSubmit={hendleSubmit}>
              <label className="form-lable" htmlFor="email">
                email
              </label>
              <input
                className="form-input"
                type="text"
                name="email"
                onChange={handleInputChange}
                value={userData.email}
                placeholder="Email"
              />


              <label className="form-lable" htmlFor="password">
                password
              </label>
              <input
                className="form-input"
                type="password"
                name="password"
                onChange={handleInputChange}
                value={userData.password}
                placeholder="PassWord"
              />


              <button className="button mt-5">login</button>
              <p className="para-log">
                if you don't have account <Link to="/signup">SignUp</Link>
              </p>
            </form>
          </div>
          <div className="img-log">
            <div className="overlay-login"></div>
            <img
              className="img-login"
              src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU="
              alt=""
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
