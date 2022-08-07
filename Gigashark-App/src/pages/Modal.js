import React from "react" ;
import "./Modal.css"
const Modal = ({ closeModal }) => {
    return (
    <div className="modalBackground">
        <div className="modalContainer" >
            <div className="titleCloseBtn">
                <div><h3 style={ {"hover": "none", "color": "white","transform": "translate(-200%, 40%)", "font-size": "30px" }}>Connect</h3></div> <div> <button className="btnred" style={ {"hover": "none", "color": "white"}} onClick={() => closeModal(false)}> X </button> </div>   </div>           
                <div className="grid-container">
                <div className="grid1">1</div>
                <div className="grid2">2</div>
                <div className="grid3">3</div>
                <div className="grid4">4</div> 
             </div>
        </div>
    </div>
    );
}

export default Modal;