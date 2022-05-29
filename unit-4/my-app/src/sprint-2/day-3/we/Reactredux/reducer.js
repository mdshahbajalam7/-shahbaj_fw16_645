import { ADD_TODO, COMPLETED_TODO, DECREMENT, DELETE_TODO, GET_TODOS, INCREMENT } from "./actiontype"

  const reducer =(state,action)=>{
    switch(action.type){
        // default:
        //     return state
        case INCREMENT:{
            return{
                ...state,
                count:state.count+action.payload
            }
        }
        case DECREMENT:{
            return{
                ...state,
                count:state.count-action.payload
            }
        }
        case GET_TODOS:{
            return {
                ...state,
                todos:action.payload
            }
        }
        case DELETE_TODO:{
            return {
                ...state,
                todos:state.todos.filter(todo=>todo.id !==action.payload)
            }
        }
        case DELETE_TODO:{
            return {
                ...state,
                todos:state.todos.filter(todo=>todo.id !==action.payload)
            }
        }
        case COMPLETED_TODO:{
            return {
                ...state,
                todos:state.todos.filter(todo=>todo.id === action.payload)
            }
        }
        case ADD_TODO:{
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        }
        default:{
            return state
        }
    }
   
}

export {reducer}