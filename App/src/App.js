import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scene from "./pages/Scene";
import HOMEHT from "./pages/HOMEHT"
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./App.css";
import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar"
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import { useMoralis } from "react-moralis";




const App = () => {
  const { isAuthenticated, Moralis } = useMoralis();
 
  return (
    <> 
    {isAuthenticated ? (
      
    <div className="page">
      <div className="mobile"><Sidebar />
      <div
        id="mobileLogout"
        onClick={() => {
          Moralis.User.logOut().then(() => {
            window.location.reload();
          });
        }}
        >
          Logout
        </div></div>
<div className="gradient__bg">
<Navbar />
      <Header />
      <Footer />
</div>
          </div>
          
    ) : (

<>
  {/* <div id="loginPage"> */}
{/* </div> */}

      <div className="App">
      <HOMEHT />
          <Scene />


      </div>

</>

    )}
    </>
    
  );
};

export default App;
