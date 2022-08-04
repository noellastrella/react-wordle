import styles from '../styles/Main.module.css';
import KeyBoard from '../components/KeyBoard';
import WordBoard from '../components/WordBoard';

import useGetData from "../hooks/useGetData";
import useManageWords from '../hooks/useManageWords';

import { useEffect, useState } from 'react';

export default function Home() {

  let {words,letterArr, currLetter, keyClick} = useManageWords();
  const [word, setWord] = useState("");

    useEffect(()=>{
      let rnd = Math.floor(Math.random()*words.length);
      setWord(words[rnd])
      console.log(word)
    },[])
  return (
    <div>
      <WordBoard letterArr={letterArr} currLetter = {currLetter}/>
      <KeyBoard keyClick={keyClick}/>
    </div>
  )
}
