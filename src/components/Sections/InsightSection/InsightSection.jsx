import React from 'react';
import './InsightSection.css';

function InsightSection({ img, text, desc }) {
  return (
    <>
      <div className='insight-card'>
        <div className='inside-card'>
            <img src={img} alt="" />
            <h2>{text}</h2>
            <p>{desc}</p>
        </div>
      </div>
    </>
  )
}

export default InsightSection