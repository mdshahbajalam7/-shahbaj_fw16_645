import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actiontype"




 export const loginsucces=(token)=>{
    return {
        type:LOGIN_SUCCESS,
        payload:token
    }
}

export const loginfailure=(error)=>{
    return{
        type:LOGIN_FAILURE,
        payload:error
    }

}