import React from 'react';
import './hero.css';
import {boximage} from '../../../assets/images';

function Hero() {
    return (
        <>
            <div className="second-portion">
                <div src={boximage} className="box-img">
                    <div className="box-text">
                        <h1>Transform Your Meal <br /> Planning Plus Get Easy <br /> Recipes & Shopping Lists</h1>
                        <h5>Personalized Recipes, Effortless Meal Plans, and Shopping Lists that Simplify Home Cooking</h5>

                        <div className="btns">
                            <div className="box-btn1">
                                <p>Start My Free Trial</p>
                            </div>
                            <div className="box-btn2">
                                <p>Shop Kitchen Essentials</p>
                            </div>
                        </div>

                        <h5>Sign up for a 7-day FREE TRIAL and get 15% OFF your first kitchen store order of curated cooking
                             essentials!
                        </h5>

                    </div>
                    </div>
                </div>
        </>
    )
}

export default Hero