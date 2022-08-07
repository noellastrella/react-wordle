import styles from '../styles/Keyboard.module.scss';

export default function KeyBoard({keyClick, word, letterArr, attempt, letters, chosen}){
    //let temp = new Set(letterArr.flat());
    
    //let selected = Array.from(temp);
    let selected = Array.from(letterArr);
    
    let wordArr = word.split("");


    let classes;

    return(
    <div className={styles.keyboardContainer}>
        <div className={styles.keyboard}>
            {
                letters.map((e,i)=>{ // iterate over all letters
                    //console.log(selected);
                    classes = `${styles.keys}`;    
                    //*
                    if(chosen[e]=="green"){
                        classes += ` ${styles.green}`;
                    }else if(chosen[e]=="yellow"){
                        classes += ` ${styles.yellow}`;
                    }else if(chosen[e]=="gray"){
                        classes += ` ${styles.gray}`;
                    }
                    //*/
                    return(
                        <div className={classes} key={i} id={e} onClick={keyClick} data-value={e} >
                            {e}
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}