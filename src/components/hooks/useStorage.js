import {useState,useEffect} from 'react'

export const useStorage = (key,initialState) => {
    let [state,setState] = useState(initialState);
    useEffect(()=>{
        let existingState = localStorage.getItem(key);
        if(existingState) setState(JSON.parse(existingState));
    },[key]);

    return [state,(state)=>{
        if(state<0){
            setState(0);
        }
        else
        setState(state);
        
        localStorage.setItem(key,JSON.stringify(state));
    }]
}
