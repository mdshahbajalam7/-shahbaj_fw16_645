import { ERROR_DATA, GET_DATA, REQUEST_DATA } from "../reduxs/actiontype"


const initalstates={
    displaydata:{},
    isloading:false,
    username:"",
    token:"",
    githubrupo:[],
}


  export const reducerdata = (state= initalstates,{type,payload})=>{
    switch(type){
        case REQUEST_DATA:{
            return{
                ...state,
                isloading:true,
                githubrupo:[],
            }
        }
        case GET_DATA:{
            return{
                ...state,
                githubrupo:payload,
                isloading:false

            }
        }
        case ERROR_DATA:{
            return{
                ...state
            }
        }
        default:
            return state
    }

}