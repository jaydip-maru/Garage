import "./MyProfile.css";
import { FaUserCircle, FaEnvelope, FaTools, FaHistory } from "react-icons/fa";
import { useState, useRef, useEffect, useCallback } from "react";
import { useAuth } from "../../Providers/AuthContext";
import axios from "axios";

function MyProfile() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);

  const { user } = useAuth();
  const menuRef = useRef(null);

  const fetchServices = useCallback(async () => {
    if (!user?.id) return;

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/services/${user.id}`,
        { withCredentials: true }
      );
      setServices(data || []);
    } catch (err) {
      console.error(err);
    }
  }, [user]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

 

  return (
    <>
      <div className="myprofile-container">
        <div onClick={() => setOpen(!open)}>
          <div>👤 My Profile</div>
        </div>

        {open && (
          <div className="mp-container">
            <div
              className="mp-card"
              ref={menuRef}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mp-header">
                <div className="mp-avatar">
                  {user?.username?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div>
                  {user && <h2 className="mp-name">{user.username}</h2>}
                  {user && <p className="mp-username">{user.email}</p>}
                  {user?.isMec ? (
                    <span className="mp-role">Garage Mechanic</span>
                  ) : (
                    <span className="mp-role">User</span>
                  )}
                </div>
              </div>

              <div className="mp-info">
                <div className="mp-row">
                  <FaEnvelope />
                  {user && <span>{user.email}</span>}
                </div>

                <div className="mp-row">
                  <FaTools />
                  {user?.isMec ? (
                    <span className="mp-role">Garage Mechanic</span>
                  ) : (
                    <span className="mp-role">User</span>
                  )}
                </div>
              </div>

              <div className="mp-history">
                <h3>
                  <FaHistory /> Past Services
                </h3>

                {services.length === 0 ? (
                  <p>No past services found.</p>
                ) : (
                  services.map((s) => (
                    <div key={s._id} className="mp-historyCard">
                      Problem: {s.problem} <br />
                      Status: {s.status} <br />
                      Service createdAt: {s.createdAt}
                    </div>
                  ))
                )}
              </div>

              <button className="mp-editBtn">View Profile</button>

            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyProfile;