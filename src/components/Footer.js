import React from "react";
import Home from "./assets/ImgMobile/home.png";
import Search from "./assets/ImgMobile/search.png";
import FMain from "./assets/ImgMobile/fmain.png";
import Settings from "./assets/ImgMobile/settings.png";
import CIcon from "./assets/ImgMobile/cicon.png";

function Footer() {
  return (
    <div className='fbfooter'>
      <img src={Home} alt='' className='fhome' />
      <img src={Search} alt='' className='fsearch' />
      <img src={FMain} alt='' className='fmain' />
      <img src={Settings} alt='' className='fsettings' />
      <img src={CIcon} alt='' className='ficon' />
    </div>
  );
}

export default Footer;
