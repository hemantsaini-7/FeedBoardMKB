import React from "react";
import profileIcon from "./assets/Images/profile-icon.png";
import dots from "./assets/Images/dots.png";
import likeIcon from "./assets/Images/like-icon.png";
import commentIcon from "./assets/Images/comment-icon.png";

function PostBlockFour() {
  return (
    <div class='block block-4'>
      <div class='head-block'>
        <img src={profileIcon} alt='' class='profile-icon' />
        <p class='head-head'>
          LOREM IPSUM <br />
          <span className='mkbspan'> 23 hours ago </span>
        </p>
        <img src={dots} alt='' class='dots' />
      </div>
      <div class='video-div'>
        <p className='addpara'>VIDEO</p>
      </div>
      <div class='block-content'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        molestias laboriosam, quaerat est doloribus architecto consectetur nobis
        quod quia aut magni assumenda dolores? Eligendi delectus doloremque, sed
        obcaecati illum est?
      </div>
      <div class='block-bottom'>
        <img src={likeIcon} alt='' class='like' />
        <p class='textl'>10K likes</p>
        <img src={commentIcon} alt='' class='comment' />
        <p class='textl'>240 comments</p>
      </div>
    </div>
  );
}

export default PostBlockFour;
