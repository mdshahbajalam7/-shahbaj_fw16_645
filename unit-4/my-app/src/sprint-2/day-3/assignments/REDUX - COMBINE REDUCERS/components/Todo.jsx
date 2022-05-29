import React from 'react'
import { useNavigate } from 'react-router-dom'

function Todo({id, status, title}) {

    const navigate = useNavigate();


  return (
    <div style={{border:"1px solid red",marginTop:"10px",backgroundColor:"teal",height:"30px",color:"white",textAlign:"center",textDecoration:"none"}} onClick={()=>navigate(`/todo/${id}`)}>{title}</div>
  )
}

export default Todo