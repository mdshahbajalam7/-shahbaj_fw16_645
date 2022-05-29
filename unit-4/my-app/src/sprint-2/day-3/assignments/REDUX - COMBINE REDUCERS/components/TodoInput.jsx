import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v1 as uuid } from 'uuid';
import { addtodo } from '../Redux/action';

function TodoInput() {
    const [title,settitle]= React.useState("")
    const dispatch = useDispatch()

    const handleAdd=()=>{
        const payload={
            title,
            id:uuid(),
            status:false,
        }
        const addtodoAction =addtodo(payload)  
        dispatch(addtodoAction)
    }
  return (
    <div>
        <h3 style={{color:"green"}}>Add_Todo</h3>
        <input  
        style={{ width:"18%",margin:"auto",
        height:"30px",backgroundColor:"pink"}}
         type="text" value={title} 
         onChange={e=>settitle(e.target.value)} 
         placeholder='add something' />
        <button style={{width:"6%",marginLeft:"5px",
        height:"35px",backgroundColor:"black",
        color:"white",borderRadius:"5px"}} 
        onClick={handleAdd}>Add_Todo</button>
    </div>
  )
}

export default TodoInput