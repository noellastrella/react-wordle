import { useEffect } from "react";
import styles from "../styles/Main.module.scss";

export default function WordBoard({letterArr, currLetter, word, attempt}){
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
                        console.log(i,attempt)
                        let classes;
                        
                        if(e.l==wordArr[j] && i!=attempt){
                            classes = styles.green;
                        }else if(wordArr.includes(e.l)  && i!=attempt){
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