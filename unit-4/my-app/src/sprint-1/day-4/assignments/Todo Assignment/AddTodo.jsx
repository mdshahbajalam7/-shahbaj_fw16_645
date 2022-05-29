import React, { useState } from "react"


export const  AddTodo = ({onAdd})=>{
    const [newTodo,setnewTodo]=useState("")
    // const onAdd=()=>{
    //     console.log(newtodo);

    // }
    const postTodo = async (value)=>{
        let res = await fetch(`http://localhost:3000/todos`,{
          method:"POST",
          headers:{"content-type":"application/json"},
          body: JSON.stringify({
              value:newTodo,
              completed:false
          }),
        });
        let data = await res.json()
        onAdd(data)
        
      }
    return (
        <div>
            <h1>Add Todo</h1>
        <input type="text"
        value={newTodo}
        name="todo"
         onChange={(e)=>setnewTodo(e.target.value)} />
        <button
         onClick={()=>{
            // let value = newTodo.trim()
            if(newTodo){
                postTodo(newTodo);
                setnewTodo("")
            }
        }}
        >
        Add_Todo
        </button>
        </div>
    )

}