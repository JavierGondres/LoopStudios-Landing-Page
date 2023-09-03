import React from "react";
import logo from "../../../public/images/logo.svg";
import facebook from "../../../public/images/icon-facebook.svg";
import instagram from "../../../public/images/icon-instagram.svg";
import pinterest from "../../../public/images/icon-pinterest.svg";
import twitter from "../../../public/images/icon-twitter.svg";
function Footer() {
  return (
    <>
      <footer>
        <div className="logo-container">
          <img src={logo} alt="" />
          <div className="footer-links-container">
            <a className="footer-links" href="/">
              About
            </a>
            <a className="footer-links" href="/">
              Careers
            </a>
            <a className="footer-links" href="/">
              Events
            </a>
            <a className="footer-links" href="/">
              Products
            </a>
            <a className="footer-links" href="/">
              Support
            </a>
          </div>
        </div>

        <div className="social-container">
          <div className="social-img">
            <div className="icon-container">
              <img className="icons" src={facebook} alt="" />
            </div>
            <div className="icon-container">
              <img className="icons" src={twitter} alt="" />
            </div>
            <div className="icon-container">
              <img className="icons" src={pinterest} alt="" />
            </div>
            <div className="icon-container">
              <img className="icons" src={instagram} alt="" />
            </div>
          </div>
          <p className="footer-p">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
