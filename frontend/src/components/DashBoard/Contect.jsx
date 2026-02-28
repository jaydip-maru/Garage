import "./Contect.css"
import { useState } from "react";
import jay from "/myPhoto2.png"


function Contect() {

    let [fromData, setFormData] = useState({
        FristName: "",
        LastName: "",
        Email: "",
        ContectNo: "",
        AboutYou: "",
        
      });


    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newVal = event.target.value;
        setFormData((fromData) => {
          fromData[fieldName] = newVal;
          return { ...fromData };
        });
      };


    return ( <>
    <div className="Wrapper-cont">
        <div className="img-cont">
            <p>If You Have a Any Query About Out Service Or If You Want To Know More About How We Can Give a Service Then Contect Out Team Member.</p>
        </div>
        <div className="cont-Form">
            <div className="My-photo">
                <img   src ={jay}
            alt="profile"
            className="contect-img" />
            </div>
            <div className="from-detail">
                <form action="">
                    <label htmlFor="FristName">FristName</label>
                    <input type="text" name="FristName" placeholder="FristName" onChange={handleInputChange} />
                  <hr className="line" />

                    <label htmlFor="LastName">LastName</label>
                    <input type="text" name="LastName" placeholder="LastName" onChange={handleInputChange} />
                    <hr className="line" />

                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" placeholder="Email" onChange={handleInputChange} />
                    <hr className="line" />


                    <label htmlFor="ContectNum">Contect No</label>
                    <input type="text" name="ContectNum" placeholder="+91 00"  onChange={handleInputChange}/>
                    <hr className="line" />


                    <label htmlFor="AboutYou">Tell Us About You</label>
                    <input type="text" name="AboutYou" placeholder="What Problem You Have"  onChange={handleInputChange}/>
                    <hr className="line" />

                    <button className="Cont-now">Contect Now</button>

                </form>
            </div>
        </div>
    </div>
    </> );
}

export default Contect;
