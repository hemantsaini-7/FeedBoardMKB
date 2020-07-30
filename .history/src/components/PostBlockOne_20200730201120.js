import React from "react";
import profileIcon from "./assets/Images/profile-icon.png";
import dots from "./assets/Images/dots.png";
import likeIcon from "./assets/Images/like-icon.png";
import commentIcon from "./assets/Images/comment-icon.png";
import CIcon from "./assets/ImgMobile/cicon.png";
import CSend from "./assets/ImgMobile/csend.png";
function PostBlockOne() {
  return (
    <div className='block block-1'>
      <div className='head-block'>
        <img src={profileIcon} alt='' className='profile-icon' />
        <p className='head-head'>
          LOREM IPSUM <br />
          <span className='mkbspan'> 2 hours ago </span>
        </p>
        <img src={dots} alt='' class='dots' />
      </div>
      <div className='images-div'>
        <p className='addpara'>IMAGES</p>
      </div>
      <div class='block-content'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        molestias laboriosam, quaerat est doloribus architecto consectetur nobis
        quod quia aut magni assumenda dolores? Eligendi delectus doloremque, sed
        obcaecati illum est?
      </div>
      <div className='block-bottom'>
        <img src={likeIcon} alt='' className='like' />
        <p className='textl'>580 likes</p>
        <img src={commentIcon} alt='' className='comment' />
        <p className='textl'>100 comments</p>
      </div>
      <div className='commentSection'>
        <img src={CIcon} alt='' className='cicon' />
        <input
          type='text'
          placeholder='Write a comment...'
          className='cinput'
        />
        <img src={CSend} alt='' className='csend' />
      </div>
    </div>
  );
}

export default PostBlockOne;
