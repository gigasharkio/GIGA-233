import "./HOMEHT.css";
import { ConnectButton } from "../components/web3uikit/src/components/ConnectButton/index.tsx";
function HOMEHT() {



    return (
        <>
        <div className="total">
          <nav className="relative-navbar">
            <div className="absolute brand-title font-space-mono text-2xl uppercase tracking-wide">
              <img src="../assets/newgiga.png" alt="" className="shark1"></img>
            </div>
            <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li className="t-red">
                    <a href="">About</a>
                  </li>
                  <li className="t-white">
                    <a href="https://www.twitter.com/gigasharkio">Twitter</a>
                  </li>
                  <li className="t-white">
                    <a href="https://www.instagram.com/gigashark.io/">Instagram</a>
                  </li>
                  <li className="t-white">
                    <a href="mailto:admin@gigashark.io">Contact</a>
                  </li>
                  <li className="t-white">
                    <a href="https://gigasharkio.creator-spring.com">Merch</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          </nav>
        </div>
        
        <div className="stylo absolute text-white text-center" id="logo2">
          <div><h1  id="title" >
          <img src="../assets/l2.png" alt="" className="shark2"></img>
            </h1></div>
            <div> <p className="font-space-mono1 text-2xl uppercase tracking-wide" id="title">
            {" "}
            A Very sophisticated blockchain explorer
          </p></div>
<div /*className="button" */>
  <ConnectButton/>

</div>
        </div>
      </>
      
    );
}

export default HOMEHT;


