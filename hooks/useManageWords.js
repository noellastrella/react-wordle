import { useState } from "react";

export default function useManageWords(){
    const [letterArr, setLetterArr] = useState(
      [
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""]
      ]
    )

    let letters = [
      'Q',
      'W',
      'E',
      'R',
      'T', 
      'Y', 
      'U', 
      'I', 
      'O', 
      'P',
      'A', 
      'S', 
      'D', 
      'F', 
      'G', 
      'H', 
      'J', 
      'K', 
      'L',
      'Z', 
      'X', 
      'C', 
      'V', 
      'B', 
      'BACK', 
      'N',
      'M', 
      'ENTER'
    ]
    
    let chosen = {};
    letters.forEach((e)=>{
        chosen[e]="";
    })
    console.log(chosen)

  const [currLetter, setCurrLetter] = useState("");
  const [letterPos, setLetterPos] = useState(0);
  const [attempt, setAttempt] = useState(0);
  
  let attempts = letterArr.length-1;
  let maxLetters = 5; //letterArr[0].length;
  
    const keyClick= (e)=>{
      let tempArr = letterArr;
      let entry = e.target.dataset.value;
      
      if(entry == "ENTER"){
        setAttempt(attempt+1);
        setLetterPos(0);
      }else if(entry=="BACK"){
        tempArr[attempt][letterPos] = "";
        letterPos > 0 ? setLetterPos(letterPos-1) : maxLetters;
        setCurrLetter(""+Math.random())
        tempArr[attempt][letterPos] = "";   
      }else{
        letterPos < maxLetters? setLetterPos(letterPos+1) : maxLetters;
        setCurrLetter(entry+Math.random());
        tempArr[attempt][letterPos] = entry;
        setLetterArr(tempArr);
      }
    }
    return { 
        letterArr, 
        currLetter, 
        keyClick,
        attempt,
        letters,
        chosen
    }
}