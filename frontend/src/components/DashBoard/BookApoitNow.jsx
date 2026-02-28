import { Link } from "react-router-dom";
import "./BookApointNow.css"

function BookApoitNow() {
    return ( <>
    <div className="book-Appointment">
        <div className="continer1">
      <div className="left-book">
            <div className="">
                <h1 className="mb-3 hedding">Your Vehicle’s Perfect Partner</h1>
                <p className="mb-3 para ml-1">  Your vehicle deserves the best –and we are here to provide it.</p>
                <div className="logo-div">
                    <p className=" log-1">Call Now <br /><Link> +9199797734496</Link></p>
                    <p className=" log-2"> </p>
                </div>
            </div>
      </div>
      <div className="right-book">
            <div>
                <h1 className="mb-3 hedding">Request a Quote</h1>
                <p className="mb-3 para">Let  Garages know about your vehicle and required services to get an initial repair estimate.</p>
                <Link to="/bookNow"  > <button className="button-book p-2">Book Now</button></Link>
            </div>
      </div>
      </div>
    </div>


    </> );
}

export default BookApoitNow;