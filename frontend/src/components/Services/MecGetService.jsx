import { data } from "react-router-dom";
import socket from "../../socket";
import ConfirmBox from "../ConfirmBox";
import { useState } from "react";



  function MecGetService() {

    const [currReq, setCurrReq] = useState(false);
    const [problem, setproblem] = useState("");
    const [data, setdata] = useState(null);



    socket.on("new-service", (data) => {
      setCurrReq(true);
      setproblem(data.problem);
      setdata(data);

      
    });
    const onAcepect = () => {
      socket.emit("accept-service", data);
      setCurrReq(false);

   }

   const onReject = () => {
      socket.emit("reject-service", data);
      setCurrReq(false);
    
   }
  

    return ( <>
   {currReq && <ConfirmBox message={problem} onYes={onAcepect} onNo={onReject}/>}
    </> );
  }
  
  export default MecGetService;