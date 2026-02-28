import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthContext";
import { useCookies } from "react-cookie";
import "./Logout.css"


function Logout() {
  const [cookies, removeCookie] = useCookies(["token"]);

  const navigate = useNavigate();
    const {logout} = useAuth();

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
    logout();
  };
 
    return ( <>
    <Link className="  logout" onClick={Logout}>Logout</Link>

    </> );
}

export default Logout;