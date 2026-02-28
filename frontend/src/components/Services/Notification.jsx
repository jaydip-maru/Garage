import { useState } from "react";
import "./Notification.css";
import axios, { all } from "axios";
import { FaBell } from "react-icons/fa";

function Notification() {
  const [open, setOpen] = useState(false);
  const [notifications,setNotifications] = useState([]);




  

  return (
    <div className="nb-wrapper">


      <div className="nb-bell" onClick={() => setOpen(!open)}>
        <FaBell />
        {notifications.length > 0 && (
          <span className="nb-badge">
            {notifications.length}
          </span>
        )}
      </div>

      {open && (
        <div className="nb-panel">

          <div className="nb-header">
            Notifications
          </div>

          <div className="nb-list">
            {notifications.map((n) => (
              <div key={n.id} className="nb-item">
                <div className="nb-text">{n.text}</div>
                <div className="nb-time">{n.time}</div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}

export default Notification;