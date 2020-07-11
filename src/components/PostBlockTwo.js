import React from "react";
import profileIcon from "./assets/Images/profile-icon.png";
import dots from "./assets/Images/dots.png";
import likeIcon from "./assets/Images/like-icon.png";
import commentIcon from "./assets/Images/comment-icon.png";
function PostBlockTwo() {
  return (
    <div class='block-2'>
      <h1 class='feedboard-title'>
        FEED<span className='newhead'>BOARD</span>
      </h1>
      <div class='block inner-block'>
        <div class='head-block'>
          <img src={profileIcon} alt='' class='profile-icon' />
          <p class='head-head'>
            LOREM IPSUM <br />
            <span className='mkbspan'> 20 minutes ago </span>
          </p>
          <img src={dots} alt='' class='dots' />
        </div>
        <div class='block-content'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          molestias laboriosam, quaerat est doloribus architecto consectetur
          nobis quod quia aut magni assumenda dolores? Eligendi delectus
          doloremque, sed obcaecati illum est?Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Recusandae vitae quo quas assumenda,
        </div>
        <div class='block-bottom'>
          <img src={likeIcon} alt='' class='like' />
          <p class='textl'>100 likes</p>
          <img src={commentIcon} alt='' class='comment' />
          <p class='textl'>40 comments</p>
        </div>
      </div>
    </div>
  );
}

export default PostBlockTwo;
