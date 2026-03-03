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

      let contect = (event) =>{
        event.preventDefault();
        
        console.log("We Get Your Contect")
        setFormData({
          FristName: "",
        LastName: "",
        Email: "",
        ContectNo: "",
        AboutYou: "",
        })
      }


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
                <form action="" onSubmit={contect}>
                    <label htmlFor="FristName">First name</label>
                    <input type="text" name="FristName" placeholder="First name" onChange={handleInputChange} />
                  <hr className="line" />

                    <label htmlFor="LastName">Last name</label>
                    <input type="text" name="LastName" placeholder="Last name" onChange={handleInputChange} />
                    <hr className="line" />

                    <label htmlFor="Email">E-mail address</label>
                    <input type="email" name="Email" placeholder="e-mail" onChange={handleInputChange} />
                    <hr className="line" />


                    <label htmlFor="ContectNum">Telephone number</label>
                    <input type="text" name="ContectNum" placeholder="+91"  onChange={handleInputChange}/>
                    <hr className="line" />


                    <label htmlFor="AboutYou">Tell us more about your request.</label>
                    <input type="text" name="AboutYou" placeholder=""  onChange={handleInputChange}/>
                    <hr className="line" />

                    <button className="Cont-now" >Get free advice</button>

                </form>
            </div>
        </div>
    </div>
    </> );
}

export default Contect;
