// import React from 'react'

function Todolist({id,status,title,handletoggle,handledeleted}) {
  return (
    <div
    className="todo-Item"
      style={{ textDecoration: status ? "line-through" : "none",margin:"20px auto", padding:"20px", border:"solid black",width:"300px", fontSize:"20px"}}>
        <input type="checkbox" className='check' onChange={()=>handletoggle(id)}  />
        {title}
        <button id="delete" onChange={()=>handledeleted(id)}>delete</button>
    </div>
  )
}

export default Todolist