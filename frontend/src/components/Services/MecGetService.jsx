import socket from "../../socket";
import ConfirmBox from "../ConfirmBox";
import { useState } from "react";
import {ToastContainer, toast } from "react-toastify";




  function MecGetService() {

    const [currReq, setCurrReq] = useState(false);
    const [problem, setproblem] = useState("");
    const [data, setdata] = useState(null);
    const hendelSuccess = (msg) => {
      toast.success(msg);
    }


    socket.on("new-service", (data) => {
      setCurrReq(true);
      setproblem(data.problem);
      setdata(data);
      console.log(data);

      
    });
    const onAcepect = () => {
      socket.emit("accept-service", data);
      setCurrReq(false);
      hendelSuccess("Mechanic accept a user request")
   }

   const onReject = () => {
      socket.emit("reject-service", data);
      setCurrReq(false);
    
   }
  

    return ( <>
   {currReq && <ConfirmBox data={data} onYes={onAcepect} onNo={onReject}/>}
    </> );
  }
  
  export default MecGetService;