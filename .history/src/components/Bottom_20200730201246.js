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
      <div className='bottom'>
        <div className='b-content'>
          <div className='b-upper'>
            <PostBlockOne />
            <PostBlockTwo />
          </div>
          <div className='b-lower'>
            <PostBlockThree />
            <PostBlockFour />
          </div>
        </div>
        <div className='bottom-btn'>
          <img src={buttonIcon} className='btnimg' />
          <a href='#' className='btn-bottom'>
            Load More
          </a>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Bottom;
