import React from "react";
import { Icon } from "web3uikit";
import './Sidebar.css';
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { defaultImgs } from "../defaultimgs";
import "../pages/Home.css"

const Sidebar = () => {
  
  const { Moralis} = useMoralis();
  const user = Moralis.User.current();
  return (
    <>
    <div className="siderContent">
      <div className="menu">
        {/* <div className="details">
        <span>Gigashark.io</span>
        </div> */}
            {/* <div className="absolute brand-title font-space-mono text-2xl uppercase tracking-wide">
              <img src="../assets/newgiga.png" alt="" className="shark"></img>
            </div> */}
            <div className="absolute brand-title font-space-mono text-2xl uppercase tracking-wide">
              <img src="../assets/newgiga.png" alt="" className="shark"></img>
            </div>
        <Link to="/" className="link"> 
        <div className="menuItems">
          <Icon fill="#42f5d1" size={33} svg="list" />
          Home
        </div>
        </Link>

        <Link to="/profile" className="link">
        <div className="menuItems">
          <Icon fill="#42f5d1" size={33} svg="user" />
          Profile
        </div>
        </Link>

        <Link to="/settings" className="link">
        <div className="menuItems">
          <Icon fill="#42f5d1" size={33} svg="cog" />
          Settings
        </div>
        </Link>

        <div  className="menuItems2">
          <Icon fill="#42f5d1" size={33} svg="cube" />
          Blockchain Explorer
        </div>

        <div className="menuItems">
          <Icon fill="#42f5d1" size={33} svg="eth" />
          Invest in Our Vision
        </div>
        

        <div  className="menuItems" onClick={() => window.open("https://opensea.io/gigashark")}>
          <Icon fill="#42f5d1" size={33} svg="cart" />
          NFTS for Sale
        </div>

       

        <div className="menuItems" onClick={() => window.location = 'mailto:admin@gigashark.io'}>
          <Icon fill="#42f5d1" size={33} svg="mail" />
          Contact
        </div>
      </div>

      <div className="details">
      <img src={user.attributes.pfpOption ? user.attributes.pfpOption : defaultImgs[0]} className="profilePic"></img>
          <div className="profile">
            <div className="who">
              {user.attributes.username.slice(0, 15)}
            </div>
            <div style={{color:"#42f5d1"}}className="accWhen">
              {`${user.attributes.ethAddress.slice(0, 4)}...${user.attributes.ethAddress.slice(38)}`}
            </div>
          </div>
          </div>
    </div>
    </>
  );
};

export default Sidebar;

