import React from "react";
import VectorSearch from "./../assets/VectorSearch.svg";
import VectorButton from "./../assets/VectorButton.svg";
import Traveloca2 from "./../assets/traveloka_logo 2.svg";
import Traveloca3 from "./../assets/traveloka_logo 3.svg";
import Traveloca4 from "./../assets/traveloka_logo 4.svg";
import Traveloca5 from "./../assets/traveloka_logo 5.svg";
import Elipse4 from "./../assets/Ellipse 4.svg";
import Elipse5 from "./../assets/Ellipse 5.svg";
import Elipse6 from "./../assets/Ellipse 6.svg";
import Rectangle12 from "./../assets/Rectangle 12.svg";
import Elipse16 from "./../assets/Ellipse 16.svg";

const Header = () => {
    return(
        <header>
            <section className="leftH">
                <div className="logoContainer">
                    <div className="figure"></div>
                    <div className="cornerFigure"></div>
                    <h1>hounter</h1>
                </div>
                <div className="headerContainer">
                    <h2>find the place to<br /> live your dreams<br /> easily here</h2>
                    <span className="size16opacity">Everything you need about finding your place to live will be here, where it will be easier for you</span>
                    <div className="searchContainerH">
                        <img src={VectorSearch} />
                        <input type="text" placeholder="Search for the location you want!" />
                        <button><span>Search</span><img src={VectorButton}/></button>
                    </div>
                    <h3>Our Partnership</h3>
                    <div className="imageContainerH">
                        <img className="imgH" src={Traveloca2}/>
                        <img className="imgH" src={Traveloca5}/>
                        <img className="imgH" src={Traveloca3}/>
                        <img className="imgH" src={Traveloca4}/>
                    </div>
                </div>
            </section>
            <section className="rightH">
            <nav className="navHeader">
                    <button className="navHeaderBtn"><span className="navHeaderBtnSpan">About Us</span></button>
                    <button className="navHeaderBtn"><span className="navHeaderBtnSpan">Article</span></button>
                    <button className="navHeaderBtn"><span className="navHeaderBtnSpan">Property</span></button>
                    <button className="signUp"><span className="signUpSpan">Sign Up!</span></button>
                </nav>
                <section className="siteInfo">
                    <div className="peopleInfo">
                        <img src={Elipse4}/>
                        <img style={{left: '18px'}} src={Elipse5}/>
                        <img style={{left: '46px'}} src={Elipse6}/>
                        <h4>1K+ People</h4>
                        <span>Successfully Getting Home</span>
                    </div>
                    <div className="houseInfo">
                        <img src={Rectangle12}/>
                        <h4>56 Houses</h4>
                        <span>Sold Monthly</span>
                    </div>
                    <div className="overflowInfo">
                        <img src={Elipse16}/>
                        <h4>4K+</h4>
                        <span>People Looking for New Homes</span>
                    </div>
                </section>
            </section>
        </header>
        )
    }
export default Header