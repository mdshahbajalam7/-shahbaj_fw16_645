import { DECEREMENT, INCREMENT } from "./action"

const initalstate={
    count:0
}


export const reduxer = (state=initalstate,action)=>{
    switch (action.type){
        case INCREMENT:
            return{
                count:state.count+action.payload
            }
            case DECEREMENT:
                return{
                    count:state.count-action.payload
                }
            default: 
            return state
    }
}