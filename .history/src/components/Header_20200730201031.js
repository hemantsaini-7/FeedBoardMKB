import React from "react";
import Logo from "./assets/ImgMobile/logo.png";
import Hamburger from "./assets/ImgMobile/hamburger.png";

function Header() {
  return (
    <header className='headerMob'>
      <img src={Logo} alt='' className='fblogo' />
      <h1 className='fbhead'>
        Feed<span className='fbhead2'>Board</span>
      </h1>
      <img src={Hamburger} alt='' className='fbhamburger' />
    </header>
  );
}

export default Header;
