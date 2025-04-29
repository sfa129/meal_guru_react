import React from 'react';
import '../ImagePortionRight/ImagePortionRight.css';

function ImagePortionLeft({ img, heading, text, bgcolor, width , height, pTop }) {
    const bgColor = {
        backgroundColor: bgcolor,
    }

    const size = {
        width: width,
        height: height
    }
    const padding = {
        paddingTop: pTop
    }
    return (
        <>
            <div className='portion-right' style={bgColor}>
                <div className='inner-right'>
                    <div className='img-right' style={bgColor}>
                        <img src={img} alt=""  style={size}/>
                    </div>
                    <div className='text-right' style={padding}>
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImagePortionLeft