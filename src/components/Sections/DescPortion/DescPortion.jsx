import React from 'react';
import './DescPortion.css';
 
function DescPortion({ img, heading, subheading, description, button, bgColor }) {
    const styling = {
        backgroundColor: bgColor,
    }
    return (
        <>
            <div className="choose-two" style={styling}>
                <div className='image-div'>
                    <img src={img} alt="" className="choose-img"/>
                </div>
                <div className="choose-contents">
                    <h2>{heading}</h2>
                    <h4>{subheading}</h4>
                    <p>{description}</p>
                    <div className="choose-text-btn" style={styling}>
                        <p >{button}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescPortion