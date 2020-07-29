import React from "react";
import Logo from "./assets/ImgMobile/logo.png";
import Hamburger from "./assets/ImgMobile/hamburger.png";

function Header() {
  return (
    <header class='headerMob'>
      <img src={Logo} alt='' class='fblogo' />
      <h1 class='fbhead'>
        Feed<span class='fbhead2'>Board</span>
      </h1>
      <img src={Hamburger} alt='' class='fbhamburger' />
    </header>
  );
}

export default Header;
