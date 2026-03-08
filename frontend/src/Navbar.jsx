import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "./Providers/AuthContext";
import ProfileMenu from "./components/ProfileMenu";
import Notification from "./components/Services/Notification";

function Navbar({ color }) {
  const { user } = useAuth();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg   sticky-top  "
        style={{ backgroundColor: `${color || "white"}` }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ">
              {/* <li className="nav-item">
          <Link className="nav-link  p-2 fs-5" aria-current="page" to="/home">Home</Link>
        </li> */}
              {/* <li className="nav-item">
          <Link className="nav-link p-2 fs-5" to="/home">Home</Link>
        </li> */}
              <li className="nav-item ">
                <Link className="nav-link p-2 fs-5" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-2 fs-5" to="/aboutme">
                  Aboutme
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-2 fs-5" to="/contect">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="">
              <Link className="navbar-brand p-2 fs-5" to="/">
                DASEV GARAGE{" "}
              </Link>
            </div>
            <div className=" ">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="nav-link p-2 fs-5">
                    <Notification />
                  </div>
                </li>
                <li className="nav-item">
                  {user && !user.isMec && (
                    <Link className="nav-link p-2 fs-5" to="/new">
                      AddGarage
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2 fs-5" to="/bookNow">
                    Booknow
                  </Link>
                </li>

                {!user && (
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link p-2 fs-5" to="/signup">
                        signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link p-2 fs-5" to="/login">
                        login
                      </Link>
                    </li>
                  </ul>
                )}
                {user && (
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <ProfileMenu />
                    </li>
                  </ul>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
