import { useEffect } from "react";
import styles from "../styles/Main.module.scss";

export default function WordBoard({letterArr, currLetter, word}){
    let letters = letterArr;
    useEffect(()=>{
        letters = letterArr;
    }, letterArr);
      
    let wordArr = word.split("");
    //console.log(word)
    return(
        <div id="words">
            {letters.map((arr,i)=>{
                return(
                    <div id={styles.wordsContainer} key={i}>
                    {arr.map((e,j)=>{
                        
                        let classes;
                        
                        if(e.l==wordArr[j]){
                            classes = styles.green;
                        }else if(wordArr.includes(e.l)){
                            classes = styles.yellow;
                        }else{
                            classes = styles.letters;
                        }
                        
                        return(
                            <div className={classes} key={j} >
                                {e.l || " "}
                            </div>
                        )
                    })}
                    </div>
                )
            })}
        </div>
    )
}