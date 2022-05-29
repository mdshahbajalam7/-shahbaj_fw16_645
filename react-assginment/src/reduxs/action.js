import { ERROR_DATA, GET_DATA,REQUEST_DATA } from "../reduxs/actiontype"

export const getdatareq=(dispatch,username)=>{
    fetch(`https://api.github.com/users/${username}/repos`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        dispatch({
            type:GET_DATA,
            payload:data
        })  
    })
    .catch((err)=>{
        console.log(err);
    })
}

export const requestdata=()=>{
    return{
        type:REQUEST_DATA
    }
}

export const errordata = ()=>{
    return {
        type:ERROR_DATA
    }
}