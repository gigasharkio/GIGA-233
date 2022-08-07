import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";

import { useMoralis } from "react-moralis";


const Profile = () => {
  const { Moralis} = useMoralis();
  const user = Moralis.User.current();


  return (
    <>
    <div className="pageIdentify">Profile</div>
    </div>
    </>
  );
};

export default Profile;

