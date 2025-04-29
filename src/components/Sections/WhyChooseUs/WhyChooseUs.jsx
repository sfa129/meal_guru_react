import React from 'react';
import './WhyChooseUs.css';
import { section1, section2, section3, section4 } from '../../../assets/images'

function WhyChooseUs() {
    return (
        <>
            <div className="choose">

                <div className="choose-one">
                    <h2>Why Choose Us</h2>
                    <div className="boxes">
                        <div className="box">
                            <img src={section1} alt="" />
                            <h4>Save Time</h4>
                            <p>Stop wasting time searching for recipes. Get personalized meal plans instantly, based on your
                                specific preferences.</p>
                        </div>
                        <div className="box">
                            <img src={section2} alt="" />
                            <h4>Personalized</h4>
                            <p>Discover meals that are crafted to match your tastes, dietary needs, and lifestyle.</p>

                        </div>
                        <div className="box">
                            <img src={section3} alt="" />
                            <h4>Waste Less</h4>
                            <p>Maximize every ingredient with plans that ensure efficiency across all your recipes.
                            </p>
                        </div>
                        <div className="box">
                            <img src={section4} alt="" />
                            <h4>Smart & Intuitive</h4>
                            <p>Easily create meal plans and shopping lists with our app’s seamless, user-friendly design.
                            </p>
                        </div>
                    </div>
                </div>

                

            </div>
        </>
    )
}

export default WhyChooseUs