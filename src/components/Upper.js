import React, { Fragment } from "react";
import cameraIcon from "./assets/Images/camera-icon.png";
import videoIcon from "./assets/Images/video-icon.png";
import fileIcon from "./assets/Images/file-icon.png";
import buttonIcon from "./assets/Images/button-icon.png";
import Illustration from "./assets/Images/illustration.png";
import TextLines from "./assets/ImgMobile/textlines.png";
import Dashed from "./assets/ImgMobile/dashed.png";
import ImgIcon from "./assets/ImgMobile/imageicon.png";
import VidIcon from "./assets/ImgMobile/videoicon.png";
import DocIcon from "./assets/ImgMobile/docicon.png";
import MobIll from "./assets/ImgMobile/mob-ill.png";
import Header from "./Header";

function Upper() {
  return (
    <Fragment>
      <Header />
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
      <div className='mobile-upper'>
        <div className='upper-mob'>
          <h1 className='upper-tophead'>
            Share Your <span style={{ color: "#626fcf" }}>Man Ki Baat</span>
          </h1>
          <img src={TextLines} alt='' className='textlines' />
          <div className='sharing'>
            <img src={Dashed} alt='' className='dashed' />
            <img src={ImgIcon} alt='' className='shicon imgicon' />
            <img src={VidIcon} alt='' className='shicon vidicon' />
            <img src={DocIcon} alt='' className='shicon docicon' />
            <p className='para-mob'>
              Upload your images, videos or documents here
            </p>
          </div>
          <button className='btn-share'>Share Now!</button>
        </div>
        <img src={MobIll} className='mob-right-img' alt='' />
      </div>
    </Fragment>
  );
}

export default Upper;
