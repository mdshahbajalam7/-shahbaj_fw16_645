import { ADD_TODO } from "./action";

const initalState={
    todos:[]
}

export const todoreducer=(state=initalState,{type,payload})=>{
    switch(action.type){
        case ADD_TODO:
            return{
                todos:[...state.todos,payload]
            }
            default: state
    }
}