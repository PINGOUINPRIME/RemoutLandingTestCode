import React from "react";
import Rectangle14 from "./../assets/Rectangle 14.svg";
import Rectangle22 from "./../assets/Rectangle 22.svg";
import Elipse6666 from "./../assets/Ellipse 6666.svg";
import Clock from "./../assets/Clock.svg";
import Rectangle23 from "./../assets/Rectangle 23.svg";

const Partnership = () => {
    return(
        <section className="partnership">
            <div className="yellowContainer" style={{width: "300px", flexDirection: "column", gap: "10px", margin: "0 auto"}}>
                <img className="yellowLine" src={Rectangle14}/>
                <span className="size14yellow">See tips and trick from our partnership</span>
            </div>
            <h5  className="size32blue" style={{width: "500px", margin: "24px auto 0 auto",textAlign: "center"}}>Find out more about<br />
            selling and buying homes</h5>
            <button className="more" style={{width: "118px", margin: "24px auto"}}><span>More Artikel</span></button>
            <section className="infoP">
                <div className="leftInfoP">
                    <div className="leftInfoItemP">
                        <img  src={Rectangle22}/>
                        <img className="avatarInfoP" src={Elipse6666}/>
                        <h3>Dianne Russell</h3>
                        <h2>The things we need to check when<br /> we want to buy a house</h2>
                        <img className="iconInfoP" src={Clock}/>
                        <div>4 min read | 25 Apr 2021</div>
                    </div>
                    <div className="leftInfoItemP">
                        <img  src={Rectangle22}/>
                        <img className="avatarInfoP" src={Elipse6666}/>
                        <h3>Dianne Russell</h3>
                        <h2>The things we need to check when<br /> we want to buy a house</h2>
                        <img className="iconInfoP" src={Clock}/>
                        <div>8 min read | 25 Apr 2021</div>
                    </div>
                    <div className="leftInfoItemP">
                        <img  src={Rectangle22}/>
                        <img className="avatarInfoP" src={Elipse6666}/>
                        <h3>Dianne Russell</h3>
                        <h2>The things we need to check when<br /> we want to buy a house</h2>
                        <img className="iconInfoP" src={Clock}/>
                        <div>6 min read | 25 Apr 2021</div>
                    </div>
                </div>
                <div className="rightInfoP">
                    <div className="rightInfoContainer">
                        <img  src={Rectangle23}/>
                        <img className="avatarInfoP" style={{ top: "275px", left: "-35px"}} src={Elipse6666}/>
                        <h3 style={{top: "303px", left: "47px"}}>Dianne Russell</h3>
                        <h2>12 Things to know before buying a house</h2>
                        <h4>Want to buy a house but are unsure about what we should know, here I will try to<br />
                        explain what we should know and check when we want to buy a house</h4>
                        <img className="iconInfoP" style={{top: "460px", left: "0px"}} src={Clock}/>
                        <div style={{top: "458px", left: "35px"}}>10 min read | 25 Apr 2021</div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Partnership