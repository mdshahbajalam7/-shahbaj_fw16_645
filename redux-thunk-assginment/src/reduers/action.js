import { ADD_DATA, EDIT_DATA, ERROR_DATA, GET_DATA, REQUEST_DATA, UPDATE_DATA } from "./actiontype"
import axios from "axios"

export const addtask=(dispatch,FormData)=>{
    axios.post("http://localhost:8000/tododata",FormData)
    .then((res)=>console.log(res))
    .catch((console.log(err)))

}

export const adddata=()=>{
    return{
        type:ADD_DATA
    }
}

export const getdata=()=>{
    return{
        type:GET_DATA
    }
}
export const requestdata=()=>{
    return{
        type:REQUEST_DATA
    }
}
export const update=()=>{
    return{
        type:UPDATE_DATA
    }
}
export const editdata=()=>{
    return{
        type:EDIT_DATA
    }
}
export const errordatat=()=>{
    return{
        type:ERROR_DATA
    }
}