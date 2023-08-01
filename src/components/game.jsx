import React from "react"
export default function Game(props){
    return(
        <div className={`game ${props.showElements? "gm" : ""} `}>


            <div className={`grid  ${props.showElements? "flx" : ""}`}>
                <span> <p>YOU PICKED</p></span>

                {props.button.map((button)=>(

                <div  key={button.name} className="grid-items">
                    
                <button
                    disabled={props.isDisabled}
                    onClick={() =>props.handleClick(button.name)}
                    className={`${button.name} 
                     ${(props.clickedButton !== "" && props.clickedButton !== button.name) ? "hide" : ""}`} >
                    <img src={button.image} alt="Scissors" />
                </button>


                     </div>
                 ))}


                </div>
                <div className={props.showResult? "result" :"hide"}>
                    <h3>{props.isTie? "IT'S A TIE":props.isWon?"YOU WON": "YOU LOSE"}</h3>
                    <button 
                     onClick={props.playAgain}>
                     PLAY AGAIN
                    </button>
                </div>

                <div className="comp-choice">
                    <span><p>THE HOUSE PICKED</p></span>
                    <button className={props.changeBtnStyle}> <img src={props.showHouseChoice.image}alt="" /> </button>
                    </div> 
            

        </div>
    )
}
