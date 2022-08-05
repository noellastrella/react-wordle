import styles from '../styles/Main.module.css';
import KeyBoard from '../components/KeyBoard';
import WordBoard from '../components/WordBoard';

import useGetData from "../hooks/useGetData";
import useManageWords from '../hooks/useManageWords';

import { useEffect, useState } from 'react';

export default function Home() {
  
  let {letterArr, currLetter, keyClick} = useManageWords();
  const [word, setWord] = useState("");  
  let words = useGetData("https://noel.lastrella.com/tmp/words.json", setWord);

  console.log(">>>>",word) ///????? WTF!



  return (
    <div>
      <WordBoard letterArr={letterArr} currLetter = {currLetter} word={word}/>
      <KeyBoard keyClick={keyClick} word={word}/>
    </div>
  )
}
