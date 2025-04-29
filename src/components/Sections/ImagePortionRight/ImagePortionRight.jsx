import React from 'react';
import './ImagePortionRight.css';

function ImagePortionRight({ img, heading, text, bgcolor }) {
  const bgColor = {
    backgroundColor: bgcolor,
  }
  return (
    <>
      <div className='portion-right' style={bgColor}>
        <div className='inner-right'>
          <div className='text-right'>
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
          <div className='img-right' style={bgColor}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagePortionRight