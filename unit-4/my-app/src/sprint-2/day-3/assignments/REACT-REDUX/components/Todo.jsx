import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { completedtodo, deletetodo } from '../action'

function Todo({id,name}) {
    const dispatch=useDispatch()
    const handleDelete=()=>{
        deletetodo(dispatch,id)
    }
    const handlecomplete=()=>{
        completedtodo(dispatch,id)
    }
  return (
    //   <Link to={`/todo/${id}`}>
      <>
    <div style={{width:"90%",margin:"auto",marginTop:"30px",textAlign:"center" }}>
    <div style={{display:"flex",justifyContent:"center",width:"50%",margin:"auto",
    justifyContent:"center",padding:"1px",alignItems:"center",
    textAlign:"center" ,justifyContent:"space-between",backgroundColor:"pink",
    height:"50px"}}>
        <div>{name}</div>
        {/* <button>ADD</button> */}
        <button style={{width:"20%",height:"50px",backgroundColor:"black",
        borderRadius:"5px",color:"white",border:"none",
        fontSize:"20px"}}
         onClick={handlecomplete}
         >Complete
         </button>
        <button style={{width:"20%",height:"50px",
        backgroundColor:"black",borderRadius:"5px",
        color:"white",border:"none",fontSize:"20px"}}
         onClick={handleDelete}
         >Delete</button>

        </div>

    </div>
        </>
        // </Link>
  )

}

export default Todo