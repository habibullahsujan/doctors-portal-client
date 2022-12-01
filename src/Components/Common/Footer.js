import React from "react";
import { Link } from "react-router-dom";
import backgroundFooter from "../../Utilities/assets/images/footer.png";

const Footer = () => {
  return (
    <div className="my-20">
      <footer
        style={{ background: `url(${backgroundFooter}),` }}
        className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 p-10 text-base-content"
      >
        <div className="flex flex-col">
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teeth Whitening</Link>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </div>
      </footer>
      <div className="text-center my-10">
        <p>Copyright © 2022 - Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
