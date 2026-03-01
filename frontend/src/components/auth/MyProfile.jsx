import "./MyProfile.css";
import { FaUserCircle, FaEnvelope, FaTools, FaHistory } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../Providers/AuthContext";
import axios, { all } from "axios";


function MyProfile() {


    const [open, setOpen] = useState(false);
    const [services, setServices] = useState(null);

      const {user} = useAuth()
    
      const menuRef = useRef();
    
      // close when clicked outside
      useEffect(() => {
        const handler = (e) => {
          if (!menuRef.current.contains(e.target)) {
            setOpen(false);
          }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
      }, []);

      useEffect(() => {
         axios.get(`${import.meta.env.VITE_API_URL}/services/${user.id}`, { withCredentials: true }).then((res) => {
          setServices(res.data);
        });
      })

  return (
    <>
<div className="myprofile-container" ref={menuRef}>
  <div  onClick={() => setOpen(!open)}>
          <div className=""> 👤 My Profile</div>
        </div>


    {open && (<div className="mp-container">

      <div className="mp-card">


        <div className="mp-header">
          <FaUserCircle className="mp-avatar" />

          <div>
           { user && <h2 className="mp-name">{user.username}</h2>}
            { user && <p className="mp-username">{user.email}</p>}
           { (user && user.isMec) ?  <span className="mp-role">Garage Mechanic</span> : <span className="mp-role">User</span> }
          </div>
        </div>


        <div className="mp-info">

          <div className="mp-row">
            <FaEnvelope />
       { user &&     <span>{user.email}</span>}
          </div>

          <div className="mp-row">
            <FaTools />
           {(user && user.isMec) ? <span>Garage Owner</span> : <span>User</span>}
          </div>

        </div>


        <div className="mp-history">
          <h3>
            <FaHistory /> Past Services
          </h3>
          {services.map((s) => (

                  <div key={s._id} className="mp-historyCard">
           Problem: {s.problem} <br />
           Status: {s.status}

              </div>
                
            ))}

          
        </div>

        <button className="mp-editBtn">
          Edit Profile
        </button>

      </div>

    </div>)}

    </div>
    </>
  );
}

export default MyProfile;