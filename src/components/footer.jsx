import React from "react";
import Facebook from "./../assets/Facebook.svg";
import Twit from "./../assets/Twit.svg";
import Inst from "./../assets/Inst.svg";

const Footer = () => {
    return(
        <footer>
            <div className="leftInfoF">
                <div className="logoF">
                    <div className="figure" style={{left: "4px", top: "4px"}}></div>
                    <div className="cornerFigure" style={{position: "static"}}></div>
                    <h1 style={{left: "50px", top: "10px"}}>hounter</h1>
                </div>
                <div className="textF">We provide information about properties such<br />
                as houses,villas and apartments to help people<br /> find their dream home
                </div>
                <div className="iconBoxF">
                    <a href="#"><img src={Facebook}/></a>
                    <a href="#"><img src={Twit}/></a>
                    <a href="#"><img src={Inst}/></a>
                </div>
            </div>
            <div className="rightInfoF">
                <div className="propertyF">
                    <h3>Property</h3>
                    <h4>House</h4>
                    <h4>Apartment</h4>
                    <h4>Villa</h4>
                </div>
                <div className="articleF">
                    <h3>Article</h3>
                    <h4>New Article</h4>
                    <h4>Popular Article</h4>
                    <h4>Most Read</h4>
                    <h4>Tips & Tricks</h4>
                </div>
                <div className="contactF">
                    <h3>Contact</h3>
                    <h4>2464 Royal Ln. Mesa, New Jersey 45463</h4>
                    <h4>(671) 555-0110</h4>
                    <h4>info@hounter.com</h4>
                </div>
            </div>
        </footer>
    )
}
export default Footer