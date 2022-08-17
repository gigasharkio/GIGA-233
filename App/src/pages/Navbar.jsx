import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/newgiga.png';
import './navbar.css';
import { useMoralis } from "react-moralis";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About</a></p>
          <p><a href="#possibility">Blog</a></p>
          <p><a href="#features">Blockchain Explorer</a></p>
          <p><a href="#blog">Block Lake</a></p>
          <p><a href="#merch">Merch</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <div style={{ color: '#42f5d1' }} className="accWhen">
              Wallet ID:{`${user.attributes.ethAddress.slice(0, 6)}...${user.attributes.ethAddress.slice(36)}`}
            </div>
            <div className="lgButton">
            <button
              onClick={() => {
                Moralis.User.logOut().then(() => {
                  window.location.reload();
                });
              }}
              type="button"
            >Logout
            </button></div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <div style={{ color: '#42f5d1' }} className="accWhen">
              {`${user.attributes.ethAddress.slice(0, 4)}...${user.attributes.ethAddress.slice(38)}`}
            </div>
            <button
              onClick={() => {
                Moralis.User.logOut().then(() => {
                  window.location.reload();
                });
              }}
              type="button"
            >Logout
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
