import React from "react";

export default function ScoreBoard(props){

    return(
        <div className="score-board">
            <img src="images/logo.svg" alt="logo" />
            <div className="scores">
                <p className="p1">Score</p>
                <p className="p2">{props.score}</p>
            </div>


        </div>
    )

}