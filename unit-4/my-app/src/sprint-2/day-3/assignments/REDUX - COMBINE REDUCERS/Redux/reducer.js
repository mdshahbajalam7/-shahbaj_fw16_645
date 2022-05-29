import { loadData, saveData } from "../utlit/localstorge"
import { ADD_TODO, COMPLETED_TODO, DELETE_TODO } from "./actiontype"



const intialstate={
    todos:loadData("todos") || []
    // todos:[
    //     {
    //         id:1,
    //         title:"learn redux",
    //         status:false
    //     }
    // ]
}

const reducer = (state = intialstate, {type,payload})=>{
    switch(type){
        case ADD_TODO:{
            const updatedtodos = [...state.todos,payload]
            saveData("todos",updatedtodos)
            return{
                ...state,
                todos:updatedtodos,
            }
            // return{
            //     ...state,
            //     todos:[...state.todos,payload]
            // }
        }
        case DELETE_TODO:{
            const updateTodo= payload
            saveData("todos",updateTodo)
            return {
                ...state,
                todos:updateTodo
            }

        };
        case COMPLETED_TODO:{
            const completedtodod=payload
            saveData("todos",completedtodod)
            return{
                ...state,
                todos:completedtodod
            } 
        }
        default:
            return  state
    }
}



export {reducer}