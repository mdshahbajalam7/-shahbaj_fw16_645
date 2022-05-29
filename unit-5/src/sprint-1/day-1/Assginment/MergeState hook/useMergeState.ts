import { useState } from 'react';
// import useMergeState from './useMergeState';


export const useMergeState=(initState:any)=>{
    const [state,setState] = useState(initState)

    return [state,setState]

} 
     

   


