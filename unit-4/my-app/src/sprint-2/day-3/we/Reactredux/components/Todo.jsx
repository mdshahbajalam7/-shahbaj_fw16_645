import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { completedtodo, deletetodo } from '../action'

function Todo({id,value,name}) {
    const dispatch=useDispatch()
    const handleDelete=()=>{
        deletetodo(dispatch,id)
    }
    const handlecomplete=()=>{
        completedtodo(dispatch,id)
    }
  return (
      <>
    <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
        <div>{value}{name}</div>
        {/* <button>ADD</button> */}
        <button onClick={handlecomplete}>complete</button>
        <button onClick={handleDelete}>Delete</button>

        </div>

        </>
  )
}

export default Todo