import axios from "axios";
import { useState, useEffect } from "react";
import {ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthContext";
import Navbar from "../../Navbar";
import "./New.css";
import Footer from "../../Footer";


function New() {
  const navigate = useNavigate();
  const {user} = useAuth();
  let [fromData, setFormData] = useState({
    name: "",
    city: "",
    dis: "",
    country: "",
    price: "",
    location: "",
    user: ""
  });
  const [file, setFile] = useState(null);

  const handleError = (err) => {
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
    });
 
  };
  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
    });
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  let handleFromSubmit = async (event) => {
    event.preventDefault();
    const data1 = new FormData();
    console.log(fromData);
    data1.append("name", fromData.name);
    data1.append("city", fromData.city);
    data1.append("dis", fromData.dis);
    data1.append("country", fromData.country);
    data1.append("price", fromData.price);
    data1.append("location", fromData.location);
    data1.append("owener",user.id);
    // append file
    data1.append("url", file); // field name must match multer
    if(user){
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/garage`, data1);
  
    
    const {message , success} = data;
  
    if(success) {
      setTimeout(() => {
        handleSuccess(message);
        navigate("/");
      }, 4000);
    }else{
      handleError(message);
    }
    setFormData({
      name: "",
      city: "",
      dis: "",
      country: "",
      price: "",
      location: "",
    });
    }
  };

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newVal = event.target.value;

    setFormData((fromData) => {
      fromData[fieldName] = newVal;
      return { ...fromData };
    });
  };


  useEffect(() => {
    
  
    if (!user) {
      setTimeout(() => {
        toast.error("need login", {
          position: "top-right",
          autoClose: 5000,
        });
      },10);
      navigate("/login");
    
  }

  }, [user]);

  return (
    <>
    <Navbar color="springgreen" />
      <form
        onSubmit={handleFromSubmit}
        className="container"
        style={{ width: "50rem" }}
      >
        <h1 className="mb-5 mt-3">Add New Garage</h1>
        <div className=" mb-3">
          <label
            htmlFor="name"
            className="form-label col-3 mr-0"
            style={{ width: "10rem" }}
          >
            {" "}
            Name of Garage :
          </label>
          <div className="">
            <input
              className="form-control "
              type="text"
              name="name"
              id="name"
              value={fromData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row ">
          <div className=" col-6">
            <label className="col-3" htmlFor="city">
              city
            </label>
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                name="city"
                id="city"
                value={fromData.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="col-6 mb-3">
            <label className="" htmlFor="dis">
              district
            </label>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="dis"
                id="dis"
                value={fromData.dis}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="country">country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            id="country"
            value={fromData.country}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className=" mb-3">
          <label className="" style={{ width: "10rem" }} htmlFor="url">
            url
          </label>
          <div className="">
            <input
              className="form-control"
              type="file"
              name="url"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="row ">
          <div className=" col-6">
            <label className="" htmlFor="price">
              Price
            </label>
            <div className="">
              <input
                className="form-control"
                type="number"
                name="price"
                id="price"
                value={fromData.price}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="col-6 mb-3">
            <label className="" htmlFor="location">
              Location
            </label>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="location"
                id="location"
                value={fromData.location}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <button className="btn btn-primary">submit</button>
      </form>
      <Footer />
      <ToastContainer />
      
    </>
  );
}

export default New;
