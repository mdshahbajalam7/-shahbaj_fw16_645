
import { ADD_TODO, COMPLETED_TODO, DELETE_TODO } from "./actiontype";



export const addtodo=(payload)=>{
    return{
        type:ADD_TODO,
        payload
    }

}



export const deleteTodo=(payload)=>{
    return{
        type:DELETE_TODO,
        payload
    }
}

export const completedtodo=(payload)=>{
    return{
        type:COMPLETED_TODO,
        payload
    }
}