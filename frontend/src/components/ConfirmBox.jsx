import React from "react";
import "./ConfirmBox.css";

function ConfirmBox({ data, onYes, onNo }) {
  return (
    <div className="overlay3">
      <div className="confirm-box">
        <h4 className="title">New Request</h4>
        <p className="Problem">Problem : {data.problem}</p>
        <p className="location">Location : {data.location}</p>
        <p className="Time">Req-Time : {data.createdAt}</p>


        <div className="button-group">
          <button onClick={onYes} className="yesBtn">
            Accept
          </button>
          <button onClick={onNo} className="noBtn">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;