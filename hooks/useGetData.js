import axios from 'axios';

import { useEffect, useState } from 'react';

export default function useGetData(url){
    
    const [data, setData]= useState([]);
    async function getData(url){
        try{
            let temp = await axios.get(url);
            await setData(temp.data);
            console.log(temp.data)
        }catch(e){
            throw(e);
            console.log("There was an error", e);
        }
    }


    useEffect(()=>{
        getData(url);
    },[])

    return data;
}