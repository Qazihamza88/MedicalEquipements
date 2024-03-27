import React from 'react';
import background from "./images/background.png";
import video from "./Video/video.mp4";
import Services from './Services';
import Aboutus from './Aboutus';
 
function Home() {
  return (
   <div> 

    <div
    className="main"
    style={{ position: "relative", width: "100%", height: "100vh" }}>
    <div
      className="img"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}>
      <img src={background} style={{width:"100%",height:"100%",objectFit:"cover" }}/>
    </div>
    <div
      className="overlay" style={{position:"absolute",top:"52%",left:"35%",transform:"translate(-50%, -50%)",
        textAlign: "center",color: "#505050",}}>
      <h2 style={{fontSize:"55px" , fontWeight:900}}>Welcome to Our Website</h2>
      <h4  style={{fontSize:"35px" , fontWeight:600}}> Saab Internationale Trading Company</h4>
      <p style={{fontSize:"20px"}}>Empowering healthcare with cutting-edge medical equipment for better patient outcomes.<br/>
         dolorem nam fugit facere dicta ea ducimus illo ab, odio aperiam!"Precision meets <br/> 
         innovation: Explore our range of advanced medical equipment."</p>
    <div>
       <video src={video}
        controls
        width="540"
        height="220"
        /> 
    </div>
    </div>
  </div>
  <Aboutus/>
  </div>
  )
}

export default Home
