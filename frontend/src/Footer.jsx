import "./Footer.css"
import { Link } from "react-router-dom";


function Footer() {
    return ( <>
   <div className="footer">
        <div className="other-page">
            <div className="page">
                <div className="page-in-my">
             <Link to="/contect" className="footer-link"> <p>contect</p></Link>  
             <Link to="/aboutme" className="footer-link">  <p>AboutMe</p></Link>  
             <Link to="/service" className="footer-link">  <p>Service</p></Link>  
             <Link to="/new" className="footer-link">  <p>AddNew</p></Link>  
                </div>
                <div className="page-in-notmy">
                    <p className="footer-link">imprint</p>
                    <p className="footer-link">Data Protection</p>
                    <p className="footer-link">Accessibility</p>
                </div>

            </div>
        </div>
        <div className="social-media">
        <div className="page">

                <div className="page-in-my">
                    
                <p class="list-inline-item"><a className="footer-link"
                href="https://www.linkedin.com/in/gecr-com230200107082">LinkedIn</a></p>
                <p class="list-inline-item"><a className="footer-link"
                href="https://www.linkedin.com/in/gecr-com230200107082">Instagram</a></p>
                <p class="list-inline-item"><a className="footer-link"
                href="https://www.linkedin.com/in/gecr-com230200107082">Facebook</a></p>
                <p class="list-inline-item"><a className="footer-link"
                href="https://www.linkedin.com/in/gecr-com230200107082">Twitter</a></p>
              
                
                
                
                </div>
                <div className="page-in-notmy footer-link">
                   <p>Design & Codeby Jaydip</p>
                </div>
        </div>
        </div>
        <div className="email footer-link">
            marujaydip75@gmail.com
        </div>
   </div>
    </> );
}

export default Footer;