import styles from '../styles/Keyboard.module.scss';

export default function KeyBoard({keyClick}){
    let letters = [
        'Q','W','E','R','T', 'Y', 'U', 'I', "O", "P",
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', "BACK", 'N','M', "ENTER"
    ]
    return(
        <div className={styles.keyboard}>
            {
                letters.map((e,i)=>{
                    return(
                        <div className={styles.keys} key={i} id={e} onClick={keyClick} data-value={e}>
                            {e}
                        </div>
                    )

                })
            
            }
        </div>
    )
}