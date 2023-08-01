import React from "react";

export default function PopUp(props){
    return(
        <div className={props.popUp? "popup":"hide"}>
            <div className="rules1">
        <h4>RULES</h4>
        <button onClick={props.hidePopUp} id="close-btn">
            <img src="/images/icon-close.svg" alt="close button"/>
        </button>
    </div>

    <img className="img" src="./images/image-rules.svg" alt="rock-paper-scissors rules" />
</div>
       
    )
}
