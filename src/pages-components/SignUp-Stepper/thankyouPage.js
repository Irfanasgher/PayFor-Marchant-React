import React from "react";
import logo from "./assets/images/payforLogo.png";
import tick from "./assets/images/tick.png";
import { connect  } from "react-redux";
import { compose } from "redux";
import "./assets/css/style.css";
import { withRouter } from "react-router-dom";
function ThankYouPage() {
  return (
    <div>
      <section class="merchant-wrapper">
        <div class="soon-container">
          <div class="merchant-signup-sec">
            <div class="merchant-sucess-mesage ">
              <div class="logo-box">
                <a href="#/">
                  <img class="img-fluid" src={logo} alt=""/>
                </a>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img class="img-fluid" src={tick} alt="" />
                <p className="thankyou">
                  Thank You! <span> You're all set</span>
                </p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                <a class="go-back" href="index.html">
                  Go back to our home page
                </a>
              </div>
            </div>
          </div>
          <div class="merchant-with " />
        </div>
      </section>
    </div>
  );
}
export default compose(withRouter, connect(null, {}))(ThankYouPage);
