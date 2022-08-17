import React from 'react';

import ai from '../assets/l22.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Explore The Blockchain Like Never Before</h1>
      <p> The Gigashark Projects brings together everything you love about a comprehensize blockchain explorer along with the improved ability of whale watching.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join our Mailing List</button>
      </div>

      <div className="gpt3__header-content__people">
        
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
