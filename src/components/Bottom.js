import React from "react";
import profileIcon from "./assets/Images/profile-icon.png";
import dots from "./assets/Images/dots.png";
import likeIcon from "./assets/Images/like-icon.png";
import commentIcon from "./assets/Images/comment-icon.png";
import buttonIcon from "./assets/Images/button-icon.png";

function Bottom() {
  return (
    <div class='bottom'>
      <div class='b-content'>
        <div class='b-upper'>
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
              molestias laboriosam, quaerat est doloribus architecto consectetur
              nobis quod quia aut magni assumenda dolores? Eligendi delectus
              doloremque, sed obcaecati illum est?
            </div>
            <div class='block-bottom'>
              <img src={likeIcon} alt='' class='like' />
              <p class='textl'>580 likes</p>
              <img src={commentIcon} alt='' class='comment' />
              <p class='textl'>100 comments</p>
            </div>
          </div>
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
                molestias laboriosam, quaerat est doloribus architecto
                consectetur nobis quod quia aut magni assumenda dolores?
                Eligendi delectus doloremque, sed obcaecati illum est?Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                vitae quo quas assumenda,
              </div>
              <div class='block-bottom'>
                <img src={likeIcon} alt='' class='like' />
                <p class='textl'>100 likes</p>
                <img src={commentIcon} alt='' class='comment' />
                <p class='textl'>40 comments</p>
              </div>
            </div>
          </div>
        </div>
        <div class='b-lower'>
          <div class='block block-3'>
            <div class='head-block'>
              <img src={profileIcon} alt='' class='profile-icon' />
              <p class='head-head'>
                LOREM IPSUM <br />
                <span className='mkbspan'> 1 day ago </span>
              </p>
              <img src={dots} alt='' class='dots' />
            </div>
            <div class='document-div'>
              <p className='addpara'>DOCUMENT</p>
            </div>
            <div class='block-content'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              molestias laboriosam, quaerat est doloribus architecto consectetur
              nobis quod quia aut magni assumenda dolores? Eligendi delectus
              doloremque, sed obcaecati illum est?
            </div>
            <div class='block-bottom'>
              <img src={likeIcon} alt='' class='like' />
              <p class='textl'>13K likes</p>
              <img src={commentIcon} alt='' class='comment' />
              <p class='textl'>680 comments</p>
            </div>
          </div>
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
              molestias laboriosam, quaerat est doloribus architecto consectetur
              nobis quod quia aut magni assumenda dolores? Eligendi delectus
              doloremque, sed obcaecati illum est?
            </div>
            <div class='block-bottom'>
              <img src={likeIcon} alt='' class='like' />
              <p class='textl'>10K likes</p>
              <img src={commentIcon} alt='' class='comment' />
              <p class='textl'>240 comments</p>
            </div>
          </div>
        </div>
      </div>
      <div class='bottom-btn'>
        <img src={buttonIcon} className='btniconstyle' />
        <a href='#' class='btn-bottom'>
          Load More
        </a>
      </div>
    </div>
  );
}

export default Bottom;
