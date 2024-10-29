import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import myImage from './assets/profile-pic.png';
import './App.css'
import Buttons from './buttons'
function App() {
  return (
    <>
      <div style={{display:"flex", gap:"20px" ,flexDirection:"column", alignItems:'center', width:"384px" , background:"rgb(32, 31, 31)" ,padding:"30px" , borderRadius:"20px"}}>
        <img src={myImage} alt="" />
        <div style={{fontSize:"36px" ,fontWeight:"600", color:"white"}}>Jessica Randall</div>
        <div style={{fontSize:"21px" ,fontWeight:"600", color:"#C4F82A"}}>London, United Kingdom</div>
        <div  style={{fontSize:"21px" ,fontWeight:"600", color:"white"}}>"Front-end developer and avid reader."</div>


       <Buttons/>
      </div>
       
    </>
  )
}

export default App
  





