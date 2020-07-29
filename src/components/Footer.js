import React from "react";
import Home from "./assets/ImgMobile/home.png";
import Search from "./assets/ImgMobile/search.png";
import FMain from "./assets/ImgMobile/fmain.png";
import Settings from "./assets/ImgMobile/settings.png";
import CIcon from "./assets/ImgMobile/cicon.png";
import FooterImg from "./assets/ImgMobile/footerImg.png";

function Footer() {
  return (
    <div class='fbfooter'>
      <img src={Home} alt='' class='fhome' />
      <img src={Search} alt='' class='fsearch' />
      <img src={FMain} alt='' class='fmain' />
      <img src={Settings} alt='' class='fsettings' />
      <img src={CIcon} alt='' class='ficon' />
      <img src={FooterImg} class='footerImg' alt='' />
    </div>
  );
}

export default Footer;
