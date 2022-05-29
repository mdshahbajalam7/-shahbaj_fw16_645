import axios from "axios"
import { ADD_TODO, COMPLETED_TODO, DECREMENT, DELETE_TODO, GET_TODOS, INCREMENT } from "./actiontype";
// export const addtodo = (payload)=>{
//     return {
//         type:ADD_TODO,
//         payload
//     }


// }

export const incrementCounter = (payload)=>({
    type:INCREMENT,
    payload,
})

export const decrementCounter=(payload)=>({
    type:DECREMENT,
    payload,
    // console.log("hello"),
})

 export const getTodos = async(dispatch)=>{
        try {
            let res = await axios.get("http://localhost:8000/todos")
            let data = await res.data
            dispatch({
            type:GET_TODOS,
            payload:data
            }

        )} catch (error) {
            console.log(error);
            }
 }   

 export const deletetodo = async(dispatch,id)=>{
    try {
        let res = await axios.delete(`http://localhost:8000/todos/${id}`)
        dispatch({
        type:DELETE_TODO,
        payload:id
        }
        )} catch (error) {
        console.log(error);
    }

}   
export const completedtodo = async(dispatch,id)=>{
    try {
        let res = await axios.patch(`http://localhost:8000/todos/${id}`)
        dispatch({
        type:COMPLETED_TODO,
        payload:id
        }
        )} catch (error) {
        console.log(error);
    }

}   
export const Addtodo = async(dispatch,Name)=>{
    try {
        let res = await axios.post(`http://localhost:8000/todos`,Name)
        dispatch({
        type:ADD_TODO,
        // payload:id
        name:Name
        }
        )} catch (error) {
        console.log(error);
    }

}   