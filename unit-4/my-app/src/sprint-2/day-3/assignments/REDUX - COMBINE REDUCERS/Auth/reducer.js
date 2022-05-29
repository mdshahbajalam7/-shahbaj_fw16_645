import { loadData, saveData } from "../utlit/localstorge"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actiontype"

const initalstate={
    isAuth:false,
    token:loadData("token")||"",
    

}


 export const Authreducer = (state=initalstate,{type,payload})=>{
     switch(type){
         case LOGIN_SUCCESS:{
             saveData("token",payload)
             return{
                 ...state,
                 isAuth:true,
                 token:payload
             }

         }
         case LOGIN_FAILURE:{
             return{
                 ...state,
                 isAuth:false,
                 token:""
             }

         }
         default:
             return state
     }

}