import axios from "axios";
import { useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../../Navbar";



function Show() {
  const navigate = useNavigate();

    const {id} = useParams();
    const [garage, SetGarage] = useState({});
    useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/garage/${id}`).then((res) => {
       SetGarage(res.data);
    }) }, []);

    let handleDelete = async () => {
        const { data } = await axios.delete(`http://localhost:8080/garage/${id}`)
        const {message} = data;
        
            toast.success(message);
       
            setTimeout(() => {
                navigate("/");
              }, 1000);
    }


    return ( <>
            <Navbar />
        <div className="container mt-5" style={{width: "50rem"}}>
            <img src={garage.url} className="card-img-top" alt="..." style={{height: "300px"}}/>
            <div className="card-body">
                <p className="card-text">#{garage.name }</p>

                <p className="">City : {garage.city} </p>

                <p className="card-text">District: {garage.dis} </p>

                <p className="card-text">Countery: {garage.country} </p>

                <p className="card-text">Price: {garage.price} </p>

                <p className="card-text">Location: {garage.location} </p>

            
            <div className="p-1">
            <button className="btn btn-primary m-2">Edit</button>
            <button className="btn btn-primary m-2" onClick={handleDelete}>Delete</button>
            </div>



            </div>
        </div>
        <ToastContainer />
   </> );
}

export default Show;