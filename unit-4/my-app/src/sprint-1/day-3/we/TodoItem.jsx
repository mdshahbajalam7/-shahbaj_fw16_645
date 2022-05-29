import React from "react";

const TodoItem = (props)=>{
    console.log(props)

    const {title,id,status,handleId ,isHidden,isEven}=props
    console.log(isHidden)
    if(isHidden==="chand"){
        return null
    }
    return(
        <>
        <h1 style={{color:isEven?"red":"green"}}>{title}</h1>
        <button onClick={()=>handleId(id)}>Delete</button>
        </>
    )
}

export default TodoItem