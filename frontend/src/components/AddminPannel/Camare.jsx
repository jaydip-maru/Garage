import Webcam from "react-webcam";
import { useRef } from "react";

function Camera() {
  const webcamRef = useRef(null);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 1000,
          height: 1000,
          facingMode: "user", // front camera
        }}
      />

<div className="nav-div text-on-dark ">
      <div className="logo">
      <Link className="nav-link" to="/home">Logo</Link>
      </div>
      <div className="">
        <ul className="nav-item">
          <li><Link className="nav-link" to="/">Home</Link></li>
         <li><Link className="nav-link" to="/new">addNew</Link></li> 
         <li><Link className="nav-link" to="/login">login</Link></li> 
         <li><Link className="nav-link" to="/signup">signUp</Link></li> 
         <Logout />
{/* this a garage man image which is usefull in a future for my project */}
         <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-733fc06 animated fadeInUp" data-id="733fc06" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-c4bdb38 elementor-widget elementor-widget-image" data-id="c4bdb38" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
																<a href="https://torettogarages.co.uk/wp-content/uploads/2024/12/User-icon-Tpretto-garage-1.png" data-elementor-open-lightbox="yes" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MjMyLCJ1cmwiOiJodHRwczpcL1wvdG9yZXR0b2dhcmFnZXMuY28udWtcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjRcLzEyXC9Vc2VyLWljb24tVHByZXR0by1nYXJhZ2UtMS5wbmcifQ%3D%3D" />
							<img loading="lazy" decoding="async" width="500" height="522" src="https://torettogarages.co.uk/wp-content/uploads/2024/12/User-icon-Tpretto-garage-1.png" class="attachment-full size-full wp-image-232" alt="" srcset="https://torettogarages.co.uk/wp-content/uploads/2024/12/User-icon-Tpretto-garage-1.png 500w, https://torettogarages.co.uk/wp-content/uploads/2024/12/User-icon-Tpretto-garage-1-287x300.png 287w" sizes="(max-width: 500px) 100vw, 500px" />						
															</div>
				</div>
					</div>
		</div>

        </ul>
      </div>
    </div>
    </div>
  );
}

export default Camera;
