import { useState } from 'react'
import { boximage, logo } from '../src/assets/images/index';

function App() {
  return (
    <>
      <h1>HI</h1>
      <img src={boximage} style={{width:"200px", height:"200px"}} />
      <br />
      <img src={logo} style={{width:"200px", height:"200px"}} />
    </>
  )
}

export default App
