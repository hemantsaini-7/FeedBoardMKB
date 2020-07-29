import React, { Fragment } from "react";
import buttonIcon from "./assets/Images/button-icon.png";
import PostBlockOne from "./PostBlockOne";
import PostBlockTwo from "./PostBlockTwo";
import PostBlockThree from "./PostBlockThree";
import PostBlockFour from "./PostBlockFour";
import Footer from "./Footer";

function Bottom() {
  return (
    <Fragment>
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
          <img src={buttonIcon} class='btnimg' />
          <a href='#' class='btn-bottom'>
            Load More
          </a>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Bottom;
