import React from 'react';
import './VideoPortion.css'

function VideoPortion() {
  return (
    <>
    <div className="video-portion">
        <div className="inner-div">
            <div className="video">
                <iframe  src="https://www.youtube.com/embed/p70h_SlDau0?si=UuIPDx_obGMg-xAS"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="video-text">
                <h2>About Us</h2>
                <p>In a busy world filled with endless meal options, My Meal Guru is here to transform the way you
                    plan your meals. Our mission is to make mealtime effortless and enjoyable by delivering personalized
                    recipes and meal plans tailored just for you. Click here to learn how we're creating a better
                    mealtime experience—one recipe at a time.
                <div className="video-text-btn">
                    <p>Discover Our Story</p>
                </div>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoPortion