import React from 'react';
import logo from '../assets/newgiga.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want access to our product before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Mint Nft</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} />
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Gigashark</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <p>Disclaimer</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Discord</p>
        <p>Twitter</p>
        <p>Telegram</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Gigashark, LLC. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
