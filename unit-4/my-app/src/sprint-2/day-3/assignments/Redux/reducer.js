export const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":{
            return{
                ...state,
                count:state.count++,
            }
        }
        case "DCEREMENT":{
            return{
                ...state,
                count:state.count--
            }
        }
        case "ADD_TODO":{
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        }
        case "REMOVE":{
            return{
                ...state,
                
            }
        }
        case "ADD":{
            return{
                ...state,
                count:(state.count+=(+action.value))

            }
        }
        case "SUBSTRACT":{
            return{
                ...state,
                count:(state.count-=(+action.value))
                
            }
        }
        case "MULTIPLY":{
            return{
                ...state,
                count:(state.count*=(+action.value))
                
            }
        }
        case "DIVIDE":{
            return{
                ...state,
                count:(state.count/=(+action.value))
                
            }
        }
    }
}