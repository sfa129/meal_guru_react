import React from 'react';
import './BlueBack.css';

function BlueBack({ page, prevPage }) {
  return (
    <>
    <div className='blue-back'>
        <div className='blue-img'>
            <h5>{page} <br /> <span>{prevPage}</span> </h5>
        </div>
    </div>
    </>
    
  )
}

export default BlueBack