import { DECREMENT, INCREMENT, RESET } from "./action";

const initalState={
    count:0
}

const reducer =(state=initalState,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                count:state.count+action.payload
            }
            case DECREMENT:
                return{
                    count:state.count-action.payload
                }
                case RESET:
                    return{
                        ...initalState
                    }
            default:
                return state
    }

}