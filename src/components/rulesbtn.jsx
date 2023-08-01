import React from "react";

export default function RulesBtn(props){
    return (
        <div className="rules-btn">
            <button onClick={props.showPopUp}>Rules</button>
        </div>
    )
}
