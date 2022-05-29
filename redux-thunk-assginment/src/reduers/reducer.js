import { ADD_DATA, ERROR_DATA, GET_DATA, REQUEST_DATA } from "./actiontype"

const initialstate={
    FormData:[],
}
export const reducerdata = (state=initialstate,{type,payload})=>{
    switch(type){
        case GET_DATA:{
            return{
                ...state,
            }
        }
        case ADD_DATA:{
            return{
                ...state,
                FormData:payload
            }
        }
        case REQUEST_DATA:{
            return{
                ...state
            }
        }
        case ERROR_DATA:{
            return{
                ...state
            }
        }
    }
}