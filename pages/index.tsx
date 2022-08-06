import styles from '../styles/Main.module.css';
import KeyBoard from '../components/KeyBoard';
import WordBoard from '../components/WordBoard';

import useGetData from "../hooks/useGetData";
import useManageWords from '../hooks/useManageWords';

import { useEffect, useState } from 'react';

export default function Home() {
  
  let {letterArr, currLetter, keyClick, attempt, letters, chosen} = useManageWords();
  const [word, setWord] = useState("");  
  let words = useGetData("https://noel.lastrella.com/tmp/words.json", setWord);

  
  return (
    <div>
      <WordBoard letterArr={letterArr}  word={word} attempt={attempt} chosen={chosen}/>
      <KeyBoard keyClick={keyClick} letterArr={letterArr} word={word} attempt={attempt} letters={letters} chosen={chosen}/>
    </div>
  )
}
