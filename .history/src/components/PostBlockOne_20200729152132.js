import React from "react";
import profileIcon from "./assets/Images/profile-icon.png";
import dots from "./assets/Images/dots.png";
import likeIcon from "./assets/Images/like-icon.png";
import commentIcon from "./assets/Images/comment-icon.png";
import CIcon from "./assets/ImgMobile/cicon.png";
import CSend from "./assets/ImgMobile/csend.png";
function PostBlockOne() {
  return (
    <div class='block block-1'>
      <div class='head-block'>
        <img src={profileIcon} alt='' class='profile-icon' />
        <p class='head-head'>
          LOREM IPSUM <br />
          <span className='mkbspan'> 2 hours ago </span>
        </p>
        <img src={dots} alt='' class='dots' />
      </div>
      <div class='images-div'>
        <p className='addpara'>IMAGES</p>
      </div>
      <div class='block-content'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        molestias laboriosam, quaerat est doloribus architecto consectetur nobis
        quod quia aut magni assumenda dolores? Eligendi delectus doloremque, sed
        obcaecati illum est?
      </div>
      <div class='block-bottom'>
        <img src={likeIcon} alt='' class='like' />
        <p class='textl'>580 likes</p>
        <img src={commentIcon} alt='' class='comment' />
        <p class='textl'>100 comments</p>
      </div>
      <div class='commentSection'>
        <img src={CIcon} alt='' class='cicon' />
        <input type='text' placeholder='Write a comment...' class='cinput' />
        <img src={CSend} alt='' class='csend' />
      </div>
    </div>
  );
}

export default PostBlockOne;
