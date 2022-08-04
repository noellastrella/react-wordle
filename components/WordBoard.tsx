import { useEffect } from "react";
import styles from "../styles/Main.module.scss";

export default function WordBoard({letterArr, currLetter}){
    let letters = letterArr;
    useEffect(()=>{
        letters = letterArr;
    }, letterArr);
        

    return(
        <div id="words">
            {letters.map((arr,i)=>{
                return(
                    <div id={styles.wordsContainer} key={i}>
                    {arr.map((e,j)=>{
                        return(
                            <div className={styles.letters} key={j}>
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