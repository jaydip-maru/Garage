import "./Footer.css"
import { Link } from "react-router-dom";


function Footer() {
    return ( <>
   <div className="footer">
        <div className="other-page">
            <div className="page">
                <div className="page-in-my">
                <p>contect</p>
                <p>About me</p>
                <p>Service</p>
                <p>Add New</p>
                </div>
                <div className="page-in-notmy">
                    <p>imprint</p>
                    <p>Data Protection</p>
                    <p>Accessibility</p>
                </div>

            </div>
        </div>
        <div className="social-media">
        <div className="page">
               
                <div className="page-in-my">
                <p>Linkdin</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twtter</p>
                </div>
                <div className="page-in-notmy">
                   <p>Design & Codeby Jaydip</p>
                </div>
        </div>
        </div>
        <div className="email">
            marujaydip75@gmail.com
        </div>
   </div>
    </> );
}

export default Footer;