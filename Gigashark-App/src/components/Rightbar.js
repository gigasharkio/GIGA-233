import React from "react";
import './Rightbar.css';
import web3 from "../images/web3-1.avif";
import ipfs from "../images/IPFS.jpeg";
import nft from "../images/nft.webp";
import slang from "../images/slang.png";
import staking from "../images/staking1.png";
import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: web3,
      text: "What is Web3.0...",
      link: "https://www.youtube.com/watch?v=FExp9YuTzbY",
    },
    {
      img: ipfs,
      text: "What is The InterPlanetary File System...",
      link: "https://www.youtube.com/watch?v=5Uj6uR3fp-U",
    },
    {
      img: nft,
      text: "The Utility of Nft's...",
      link: "https://www.youtube.com/watch?v=5xPrbqo46EE",
    },
    {
      img: staking,
      text: "What is Staking? [Passive Income in Crypto]..",
      link: "https://www.youtube.com/watch?v=vZ2UZdB07fo",
    },
    {
      img: slang,
      text: "Crypto Slang Explained ...",
      link: "https://www.youtube.com/watch?v=-5JRoUfDE2Y",
    },
  ];

  return (
    <>
    <div className="rightbarContent">
      <Input
      label="Search GigaShark"
      name="Search GigaShark"
      prefixIcon="search"
      labelBgColor="#141d26"
      >
      </Input>
      <div style={{color: "orange"}}className="trends1">
      <div></div>New Developments to Our Roadmap and Blockchain Explorer Coming to You Soon
    </div>
    <div className="trends">
       Learning For You
      {trends.map((e) => {
        return(
          <>
          <div className="trend" onClick={() => window.open(e.link)}>
            <img src={e.img} className="trendImg"></img>
            <div className="trendText">{e.text}</div>
          </div>
          </>
        )
      })}
    </div>

    </div>
    </>
  );
};

export default Rightbar;

