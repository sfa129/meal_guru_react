import React from 'react';
import './Demo.css';
import { demopic } from '../../assets/images'

function Demo() {
  return (
    <div className='container'>
      <div className="demo-div">
        <div className="demo-text">
          <h4>Start Your Free Demo!</h4>
          <h1>Your Personalized Meal Plan and Recipes Await!</h1>
          <h5>Answer Four Quick Questions To Get A Customized Meal Plan And Recipes Instantly.</h5>
        </div>
        <div className="demo-pic">
          <img src={demopic} alt="demopic" />
        </div>
      </div>
    </div>
  )
}

export default Demo