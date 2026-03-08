import "./Footer.css"
import { Link } from "react-router-dom";


function Footer() {
    return ( <>
   <div className="footer p-5">

<div className="page">

<div className="page-in-my">
<h5>Pages</h5>
<Link to="/contect" className="footer-link">Contact</Link>
<Link to="/aboutme" className="footer-link">About Me</Link>
<Link to="/service" className="footer-link">Service</Link>
<Link to="/new" className="footer-link">Add New</Link>
</div>

<div className="page-in-notmy">
<h5>Legal</h5>
<p className="footer-link">Imprint</p>
<p className="footer-link">Data Protection</p>
<p className="footer-link">Accessibility</p>
</div>

</div>

<div className="social-media">
<div className="page">

<div className="page-in-my">
<a className="footer-link" href="#">LinkedIn</a>
<a className="footer-link" href="#">Instagram</a>
<a className="footer-link" href="#">Facebook</a>
<a className="footer-link" href="#">Twitter</a>
</div>

<div className="page-in-notmy">
<p>Design & Code by Jaydip</p>
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