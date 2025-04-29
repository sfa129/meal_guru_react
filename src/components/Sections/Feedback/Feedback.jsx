import React from 'react';
import './feedback.css';
import { feed1, feed2, feed3 } from '../../../assets/images'

function Feedback() {
  return (
    <>
    <div className="feedback">
        <div className="feedback-heading">
            <h2>What People Are Saying</h2>
        </div>
        <div className="feed-boxes">
            <div className="feed-box">
                <div className="feedbox-text">
                    <p>The personalized meal plan is spot on—it’s like the app knows exactly what I need!</p>
                </div>
                <div className="feedbox-box">
                    <img src={feed1}/>
                    <p>Bob S. <br/>Trainer</p>
                </div>
            </div>

            <div className="feed-box">
                <div className="feedbox-text">
                    <p>This app is super easy to use! I love how I can plan my meals in just a few minutes.</p>
                </div>
                <div className="feedbox-box">
                    <img src={feed2} alt=""/>
                    <p>Judith B<br/>User</p>
                </div>
            </div>

            <div className="feed-box">
                <div className="feedbox-text">
                    <p>I’m really impressed with the variety of recipes available. There’s always something new and
                        exciting to try!</p>
                </div>
                <div className="feedbox-box three">
                    <img src={feed3} alt=""/>
                    <p>Ryan M.<br/>Home Cook</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Feedback