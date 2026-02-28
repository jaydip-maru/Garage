import { useState, useEffect } from "react";
import axios, { all } from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../Providers/AuthContext";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Garage from "./Garage";
import Navbar from "../../Navbar";
import UserAppReq from "../Services/UserAppReq"
import MecGetService from "../Services/MecGetService"




function Home() {
  const [Garages, SetGarages] = useState([]);
  const {user,login,logout} = useAuth();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [currUserIsMec, setcurrUserIsMec] = useState(false);


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}`).then((res) => {
      SetGarages(res.data);
    });
  }, []);



  
  

  return (
    <>
    <Navbar color="white"/>


      <div className="container">
        <h1>List Of Garages</h1>
        <div className=" row">
          {Garages.map((Gar) => {
            return (
              <Garage
              name={Gar.name}
              city={Gar.city}
              url={Gar.url}
              dis={Gar.dis}
              country={Gar.country}
              key={Gar._id}
              price={Gar.price}
              id = {Gar._id}
              owener = {user}
              />
            );
          })}
        </div>
      </div>

{currUserIsMec && <MecGetService />}

         

      <ToastContainer  />
    </>
  );
}

export default Home;
