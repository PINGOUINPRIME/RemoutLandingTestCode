import React, { useState } from "react";
import Rectangle14 from "./../assets/Rectangle 14.svg";
import Rectangle19 from "./../assets/Rectangle 19.svg";
import Elipse111116 from "./../assets/Ellipse 111116.svg";
import Contact from "./../assets/Contact.svg";
import Rectangle17 from "./../assets/Rectangle 17.svg";
import Rectangle188 from "./../assets/Rectangle 188.svg";
import Rectangle199 from "./../assets/Rectangle 199.svg";
import Rectangle20 from "./../assets/Rectangle 20.svg";
import Play from "./../assets/Play.svg";

const Sell = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState();
    const openModal = (src) => {
        setOpen(true);
        setImage(src);
    }
    return(
        <>
        <section className="sell">
            <div className="sellInfo">
                <div className="yellowContainer" style={{width: "135px"}}>
                    <img className="yellowLine" src={Rectangle14}/>
                    <span className="size14yellow">Ready to Sell!</span>
                </div>
                <h5 className="size32blue" style={{margin: "12px 0 0 0"}}>Let’s tour and see our house!</h5>
                <div className="size16opacity" style={{margin: "16px 0 0 0"}}>Houses recommended by our partners that have been<br/>
                curated to become the home of your dreams!</div>
                <h3>House Detail</h3>
                <div className="sellDetail">
                    <div>4 Bedrooms</div>
                    <div>2 Bathrooms</div>
                    <div>1 Carport</div>
                    <div>2 Floors</div>
                </div>
                <img src={Rectangle19} style={{margin: "40px 0 0 0"}}/>
                <div className="sellContact">
                    <div>
                        <img src={Elipse111116} style={{height: "56px"}}/>
                        <h3 style={{top: "-10px", left: "80px"}}>Dianne Russell</h3>
                        <span style={{top: "30px", left: "80px"}}>Manager Director</span>
                    </div>
                    <button><img src={Contact}/><span>Contact Now</span></button>
                </div>
            </div>
            <section className="sellGalery">
                <img style={{position: "absolute", left: "200px", zIndex: "1"}} src={Rectangle17}  onClick={() => openModal(Rectangle17)}/>
                <img style={{position: "absolute", left: "425px", top: "185px", zIndex: "2"}} src={Play}/>
                <img style={{position: "absolute", left: "150px", top: "300px", zIndex: "2"}} src={Rectangle188} onClick={() => openModal(Rectangle188)}/>
                <img style={{position: "absolute", left: "460px", top: "388px", zIndex: "2"}} src={Rectangle199} onClick={() => openModal(Rectangle199)}/>
                <img style={{position: "absolute", left: "570px", top: "388px", zIndex: "2"}} src={Rectangle20} onClick={() => openModal(Rectangle20)}/>
            </section>
        </section>
        <div className={`overlay animated ${open ? 'show' : ''}`}>
                <div className="modal">
                    <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                    <title />
                    <path  d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                    <img src={image}/>
                </div>
            </div>
        </>
    )
}
export default Sell