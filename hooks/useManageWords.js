import { useState } from "react";
import useGetData from "./useGetData";

export default function useManageWords(){
    

    
    const [letterArr, setLetterArr] = useState(
      [
        [{l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}],
        [{l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}],
        [{l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}],
        [{l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}],
        [{l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}],
        [{l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}],
        [{l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}, {l:"",m:""}],
      ]
    )
    
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
        tempArr[attempt][letterPos].l = "";
        letterPos > 0 ? setLetterPos(letterPos-1) : maxLetters;
        setCurrLetter(""+Math.random())
        tempArr[attempt][letterPos].l = "";
        
  
      }else{
        
        letterPos < maxLetters? setLetterPos(letterPos+1) : maxLetters;
        setCurrLetter(entry+Math.random());
        tempArr[attempt][letterPos].l = entry;
        setLetterArr(tempArr);
        
  
        //console.log(letterPos,letterArr);
      }
       
    }
    return { 
        letterArr, 
        currLetter, 
        keyClick
    }

}