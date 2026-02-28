import { useState, useRef, useEffect } from "react";
import "./profileMenu.css";
import Logout from "./auth/Logout";
import { Link } from "react-router-dom";
import MyProfile from "./auth/MyProfile";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../Providers/AuthContext";




export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const {user} = useAuth();


  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="profile-container" ref={menuRef}>
      {/* profile button */}
     
      <div className="profile-btn" onClick={() => setOpen(!open)}>
      <FaUserCircle className="avatar"/>
            <span>{user.username}</span>
      </div>

      {/* dropdown */}
      {open && (
        <div className="profile-menu">
       <div className="menu-item" ><MyProfile /> . </div>
       
          <div className="menu-item">⚙️ Settings</div>
          <div className="menu-item">📁 Projects</div>
          <div className="menu-divider"></div>
          <div className="menu-item logout">🚪 <Logout /> </div>
        </div>
      )}
    </div>
  );
}