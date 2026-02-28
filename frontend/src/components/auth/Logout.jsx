import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthContext";
import axios from "axios";

import "./Logout.css"


function Logout() {
  const navigate = useNavigate();
    const {logout} = useAuth();

    

  const Logout = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/logout`,
      {},
      { withCredentials: true }
   );
    logout();
    localStorage.removeItem(token)
      setTimeout(() => {
        navigate("/");
      }, 1000);
    
  };
 
    return ( <>
    <Link className="  logout" onClick={Logout}>Logout</Link>

    </> );
}

export default Logout;