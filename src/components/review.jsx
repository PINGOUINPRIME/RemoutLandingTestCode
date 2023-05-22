import React, { useEffect, useRef, useState } from "react";
import Rectangle14 from "./../assets/Rectangle 14.svg";
import Elipse111116 from "./../assets/Ellipse 111116.svg";
import Rectangle21 from "./../assets/Rectangle 21.svg";
import Star from "./../assets/Star.svg";


const Review = () => {
    const [current, setCurrent] = useState(1)
    const ref = useRef(null)

    const desired = e => {
        setCurrent(Number(e.target.id))
    }
    
     useEffect(() => {
        ref.current.style.transition = 'all 0.2s ease-in-out'
        ref.current.style.transform = `translateX(-${current === 1 ? 50 : current === 2 ? 100 : 0}%)`}, [current])
    return(
       <section className="review">
            <div className="yellowContainer" style={{width: "135px", flexDirection: "column", gap: "10px", margin: "0 auto"}}>
                <img className="yellowLine" src={Rectangle14}/>
                <span className="size14yellow">See Our Review</span>
            </div>
            <h5  className="size32blue" style={{width: "500px", margin: "20px auto"}}>What Our User Say About Us</h5>
            <section className="reviewCarosel" ref={ref}>
                <div className="caroselElement" onClick={() => setCurrent(0)} >
                    <img src={Rectangle21}/>
                    <div className="caroselInfo">
                        <h4>Best! I got the house I wanted through Hounter</h4>
                        <div>Through this website I can get a house with the type and specifications I want very easily,
                        without a complicated process to be able to find information on the house we want.</div>
                        <img className="avatar" src={Elipse111116}/>
                        <h3>Dianne Russell</h3>
                        <h2>Manager Director</h2>
                        <img className="star" src={Star}/>
                        <h5>4.6</h5>
                    </div>
                </div>
                <div className="caroselElement" onClick={() => setCurrent(1)}>
                    <img src={Rectangle21}/>
                    <div className="caroselInfo">
                        <h4>Best! I got the house I wanted through Hounter</h4>
                        <div>Through this website I can get a house with the type and specifications I want very easily,
                        without a complicated process to be able to find information on the house we want.</div>
                        <img className="avatar" src={Elipse111116}/>
                        <h3>Dianne Russell</h3>
                        <h2>Manager Director</h2>
                        <img className="star" src={Star}/>
                        <h5>4.6</h5>
                    </div>
                </div>
                <div className="caroselElement" onClick={() => setCurrent(2)}>
                    <img src={Rectangle21}/>
                    <div className="caroselInfo">
                        <h4>Through the Hounter, I can get a house for my self</h4>
                        <div>By looking for information about what kind of house we want,
                        we managed to get the house we wanted very quickly,
                        and directly connected with the seller to be able to ask about the details, very helpful!</div>
                        <img className="avatar" src={Elipse111116}/>
                        <h3>Esther Howard</h3>
                        <h2>Head of Marketing</h2>
                        <img className="star" src={Star}/>
                        <h5>4.6</h5>
                    </div>
                </div>
            </section>
            <div className='button2container'>
                    {[0, 1, 2].map(num => (<div
                    className={`button2 ${num === current && 'active'}`}
                    onClick={desired}
                    id={num}
                    key={num}
                    />))}
                </div>
       </section>
    )
}
export default Review