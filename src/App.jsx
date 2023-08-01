import React, {useEffect, useState} from "react";
import ScoreBoard from "./components/scoreboard";
import Game from "./components/Game";
import RulesBtn from "./components/RulesBtn";
import PopUp from "./components/PopUp";

export default function App(){
// buttons array
  const buttons = [
    { name: "paper", label: "Paper", image: "images/icon-paper.svg" },
    { name: "scissors", label: "Scissors", image: "images/icon-scissors.svg" },
    { name: "rock", label: "Rock", image: "images/icon-rock.svg" },
  ];
// states
  const [clickedButton, setClickedButton] = useState("")
  const [showElements, setShowElements]=useState(false)
  const [showHouseChoice, setShowHousechoice] =useState([])
  const [isDisabled, setIsDisabled] =useState(false)
  const [changeBtnStyle, setChangeBtnStyle] =useState("comp-btn")
  const [score, setScore]=useState(0)
  const [showResult, setShowResult]=useState(false)
  const [isWon, setIsWon]=useState(false)
  const [isTie, setIsTie]=useState(false)
  const [popUp, setPopUp]= useState(false)


// handleclick function
    function handleClick(buttonName){
        setClickedButton(buttonName)
          setIsDisabled(true)
            setShowElements(true)
            Check() 
        }
// function to get random buttons from the buttons array
    function randomChoice(){
          const randomChoice = Math.floor(Math.random() * buttons.length)
          return buttons[randomChoice]
        }   
//  to delay and to check if the user have selected a button before displaying the computer's choice
  useEffect(()=>{
    if(clickedButton !==""){
    setTimeout(()=>{
    const randomButton =randomChoice()
      setShowHousechoice(randomButton)
      setChangeBtnStyle(randomButton.name)
      setShowResult(true)   
  },1000)
  }
  },[clickedButton])

//  to check for wins,lose and ties
  function Check(){
    let newScore =score
    if(clickedButton===showHouseChoice.name){
     
      setIsTie(true)
    }
    else if(clickedButton ==="rock" && showHouseChoice.name ==="paper"){
      setIsWon(true)
      newScore++
      
    }
    else if(clickedButton === "scissors" && showHouseChoice.name==="paper"){
      setIsWon(true)
    newScore++
    }
    else if(clickedButton ==="rock" && showHouseChoice.name ==="scissors"){
      setIsWon(true)
      newScore++
    }
    else{
      setIsWon(false)
    }
    setScore(newScore)
  }

  //  to check for wins after the computer's choice has rendered
  useEffect(()=>{
    Check()
  },[showHouseChoice])

  //  to save the scores to local storage
  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    const data = window.localStorage.getItem('scores');
    if ( data !== null ) 
    {setScore(parseInt(JSON.parse(data)))}
  }, []);


//  play again function
  function playAgain(){
    setClickedButton("")
    setIsDisabled(false)
    setShowElements(false)
    setShowResult(false)
    setIsWon(false)
    setIsTie(false)
    setShowHousechoice([])
    setChangeBtnStyle("comp-btn")

  } 

  function showPopUp(){
    setPopUp(true)
  }
  function hidePopUp(){
    setPopUp(false)
  }

  return(
    <>
    <div className={`app ${popUp? "blur" : ""} `}>

      <ScoreBoard 
       score={score}
       />

      <Game 
     button ={buttons}
     clickedButton={clickedButton}
     showElements={showElements}
     changeBtnStyle={changeBtnStyle}
     handleClick= {handleClick}
     showHouseChoice={showHouseChoice}
     showResult={showResult}
     isDisabled={isDisabled}
     isWon ={isWon}
     isTie ={isTie}
     playAgain={playAgain}
      />
    </div>

    <RulesBtn
    showPopUp={showPopUp} 
    />

     <PopUp
     hidePopUp ={hidePopUp}
     popUp={popUp}
      /> 

    </>
  )
}