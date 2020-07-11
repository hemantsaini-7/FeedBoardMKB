import React from "react";
import buttonIcon from "./assets/Images/button-icon.png";
import PostBlockOne from "./PostBlockOne";
import PostBlockTwo from "./PostBlockTwo";
import PostBlockThree from "./PostBlockThree";
import PostBlockFour from "./PostBlockFour";

function Bottom() {
  return (
    <div class='bottom'>
      <div class='b-content'>
        <div class='b-upper'>
          <PostBlockOne />
          <PostBlockTwo />
        </div>
        <div class='b-lower'>
          <PostBlockThree />
          <PostBlockFour />
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
