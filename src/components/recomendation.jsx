import React, { useEffect, useRef, useState } from "react";
import Rectangle14 from "./../assets/Rectangle 14.svg";
import House from "./../assets/House.svg";
import Villa from "./../assets/Villa.svg";
import Apartment from "./../assets/Apartment.svg";
import ArrowLeft from "./../assets/ArrowLeft.svg";
import ArrowRight from "./../assets/ArrowRight.svg";
import Rectangle15 from "./../assets/Rectangle 15.svg";
import Rectangle155 from "./../assets/Rectangle 155.svg";
import Rectangle1555 from "./../assets/Rectangle 1555.svg";
import Elipse116 from "./../assets/Ellipse 116.svg";
import Elipse1116 from "./../assets/Ellipse 1116.svg";
import Elipse11116 from "./../assets/Ellipse 11116.svg";
import Elipse111116 from "./../assets/Ellipse 111116.svg";

const TOTAL_SLIDES = 3

const Recomendation = () => {
    const [current, setCurrent] = useState(0)
    const ref = useRef(null)
    const next = () => {
        if ( current >= TOTAL_SLIDES ) return
        else setCurrent(current + 1)
    }
    const prev = () => {
        if ( current === 0 ) return
        else setCurrent(current - 1)
    }
    const desired = e => {
        setCurrent(Number(e.target.id))
    }
    useEffect(() => {
        ref.current.style.transition = 'all 0.2s ease-in-out'
        ref.current.style.transform = `translateX(-${current === 1 ? 30 : current === 2 ? 60 : current === 3 ? 90 : current === 4 ? 120 : 0}%)`
    }, [current])

    return(
        <section className="recomendation">
            <div className="yellowContainer">
                <img className="yellowLine" src={Rectangle14}/>
                <span className="size14yellow">Our Recommendation</span>
            </div>
            <h5 className="size32blue">Featured House</h5>
            <section className="navRecomendation">
                <nav className="navRec">
                    <button className="navRecBtn"><img src={House} /><span className="navRecBtnSpan size18grey greenBtn">House</span></button>
                    <button className="navRecBtn transparent"><img src={Villa} /><span className="navRecBtnSpan size18grey">Villa</span></button>
                    <button className="navRecBtn transparent"><img src={Apartment} /><span className="navRecBtnSpan size18grey">Apartment</span></button>
                </nav>
                <nav className="navRecArrow">
                    <button className="recArrowBtn" onClick={prev}><img src={ArrowLeft}/></button>
                    <button className="recArrowBtn greenArrow" onClick={next}><img src={ArrowRight}/></button>
                </nav>
            </section>
            <section className="featuredHouses" ref={ref}>
                <div className="featuredElement">
                    <img src={Rectangle15} />
                    <h5>Roselands House</h5>
                    <h4>$ 35.000.000</h4>
                    <div className="featuredPerson">
                        <img src={Elipse111116}/>
                        <h3>Dianne Russell</h3>
                        <span>Manchester, Kentucky</span>
                    </div>
                </div>
                <div className="featuredElement">
                    <img src={Rectangle155} />
                    <h5>Woodlandside</h5>
                    <h4>$ 20.000.000</h4>
                    <div className="featuredPerson">
                        <img src={Elipse116}/>
                        <h3>Robert Fox</h3>
                        <span>Dr. San Jose, South Dakota</span>
                    </div>
                </div>
                <div className="featuredElement">
                    <img src={Rectangle1555} />
                    <h5>The Old Lighthouse</h5>
                    <h4>$ 44.000.000</h4>
                    <div className="featuredPerson">
                        <img src={Elipse1116}/>
                        <h3>Ronald Richards</h3>
                        <span>Santa Ana, Illinois</span>
                    </div>
                </div>
                <div className="featuredElement">
                    <img src={Rectangle15} />
                    <h5>Cosmo's House</h5>
                    <h4>$ 22.000.000</h4>
                    <div className="featuredPerson">
                        <img src={Elipse11116}/>
                        <h3>Jenny Wilson</h3>
                        <span>Preston Rd. Inglewood, Maine 98380</span>
                    </div>
                </div>
                <div className="featuredElement">
                    <img src={Rectangle155} />
                    <h5>Woodlandside</h5>
                    <h4>$ 20.000.000</h4>
                    <div className="featuredPerson">
                        <img src={Elipse116}/>
                        <h3>Robert Fox</h3>
                        <span>Dr. San Jose, South Dakota</span>
                    </div>
                </div>
                <div className="featuredElement">
                    <img src={Rectangle15} />
                    <h5>Roselands House</h5>
                    <h4>$ 35.000.000</h4>
                    <div className="featuredPerson">
                        <img src={Elipse111116}/>
                        <h3>Dianne Russell</h3>
                        <span>Manchester, Kentucky</span>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Recomendation