import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetData(url, setWord){
    
    async function getData(url){
        try{
            let temp = await axios.get(url);
            let rnd = Math.floor(Math.random()*temp.data.length);
            setWord(temp.data[rnd]);
        }catch(e){
            throw(e);
            console.log("There was an error", e);
        }
    }

    useEffect(()=>{
        getData(url);
    },[])
    //return data;
}