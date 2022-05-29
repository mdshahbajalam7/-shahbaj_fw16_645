export const INCREMENT="INCREMENT"
export const DECREMENT="DECREMENT"
export const RESET="RESET"


export const increment=(payload)=>{
    type:INCREMENT,
    payload
}
export const dcrement=(payload)=>{
    type:DECREMENT,
    payload
}
export const reset=(payload)=>{
    type:RESET,
    payload
}