import React from "react";
import cameraIcon from "./assets/Images/camera-icon.png";
import videoIcon from "./assets/Images/video-icon.png";
import fileIcon from "./assets/Images/file-icon.png";
import buttonIcon from "./assets/Images/button-icon.png";
import Illustration from "./assets/Images/illustration.png";

function Upper() {
  return (
    <div className='upper'>
      <div className='top-block'>
        <h1 className='upper-head'>
          SPEAK YOUR <span className='mkbspan'>MAN KI BAAT</span>
        </h1>
        <div className='input-div'>
          <textarea id='text' className='input-field'></textarea>
        </div>
        <div className='icons'>
          <img src={cameraIcon} alt='' />
          <img src={videoIcon} alt='' />
          <img src={fileIcon} alt='' className='fileicon' />
          <div className='share-btn'>
            <h3>SHARE</h3>
            <img src={buttonIcon} alt='' className='btnicon' />
          </div>
        </div>
      </div>
      <div className='right-img'>
        <img src={Illustration} alt='' />
      </div>

      <div className='waves'></div>
    </div>
  );
}

export default Upper;
