import { useEffect } from "react";
import styles from "../styles/Main.module.scss";

export default function WordBoard({letterArr, word, attempt, chosen}){
    let lettersArray = letterArr;
    useEffect(()=>{
        lettersArray = letterArr;
    }, letterArr);
      
    let wordArr = word.split("");
    //console.log(word)
    return(
        <div id="words">
            {lettersArray.map((arr,i)=>{
                return(
                    <div id={styles.wordsContainer} key={i}>
                    {arr.map((e,j)=>{

                        let classes = styles.letters;
                        
                        if(e==wordArr[j] && i!=attempt){
                            classes += ` ${styles.green}`;
                            chosen[e]="green";

                        }else if(wordArr.includes(e)  && i!=attempt){
                            classes += ` ${styles.yellow}`;
                            chosen[e] = "yellow";
                        }else if(i!=attempt){
                            chosen[e] = "gray";
                        }
                        
                        return(
                            <div className={classes} key={j} >
                                {e || " "}
                            </div>
                        )
                    })}
                    </div>
                )
            })}
        </div>
    )
}