import React from "react";
import Mail from "./../assets/Mail.svg";
import Elipse116 from "./../assets/Ellipse 116.svg";
import Elipse1116 from "./../assets/Ellipse 1116.svg";
import Elipse11116 from "./../assets/Ellipse 11116.svg";
import Elipse111116 from "./../assets/Ellipse 111116.svg";

const Subscribe = () => {
    return(
        <section className="subscribe">
            <h2 className="size32blue">Subscribe For More Info<br /> and update from Hounter</h2>
            <div style={{position: "static", margin: "32px 0 0 0"}} className="searchContainerH">
                <img src={Mail} />
                <input type="text" placeholder="Your email here" />
                <button style={{width: "129px"}}><span>Subsribe Now</span></button>
            </div>
            <div className="bgS" style={{left: "0px"}}></div>
            <div className="bgS"style={{left: "-250px", background: "#3a64d8"}}></div>
            <div className="bgS"style={{right: "0px"}}></div>
            <img className="bgImageS" style={{top: "53px", left: "72px"}} src={Elipse116} />
            <img className="bgImageS" style={{top: "88px", right: "87px"}} src={Elipse1116} />
            <img className="bgImageS" style={{bottom: "6px", left: "111px"}} src={Elipse11116} />
            <img className="bgImageS" style={{bottom: "17px", right: "150px"}} src={Elipse111116} />
        </section>
    )
}
export default Subscribe