import React, { useState } from 'react'
import styles from "./Todo.module.css"

export const Todo = ({todo,onDelete,onEdit}) => {
  const [isEditable,setisEditable]=useState(false)
  const [value,setvalue]=useState(todo.value)

  const deleteTodo = async ()=>{
    await fetch(`http://localhost:3000/todos/${todo.id}`,{
      method:"DELETE",
      headers:{"content-type":"application/json"},

    })
    onDelete(todo.id)
    // let data = await res.json()
    // console.log(data)
  };
  const editTodo = async ()=>{
   let res =  await fetch(`http://localhost:3000/todos/${todo.id}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        value,
        completed:true,
      }),
    });
    let data = await res.json()
    console.log(data)
    onEdit(data)
    // onDelete(todo.id)
  };
  

  return  (
    <>
    <div className={styles.container}>
    <div  className={`${styles.flex}${todo.completed? styles.lineThrough:"none"}`}
    >
      {isEditable ? (
       <div>
       {/* <h1>Add Todo</h1> */}
   <input type="text"
   value={value}
   name="todo"
    onChange={(e)=>setvalue(e.target.value)} />
   <button
    onClick={()=>{
       // let value = newTodo.trim()
       if(value){
           editTodo(value);
           setisEditable(false)
       }
   }}
   >
   update
   </button>
   </div>
      ):(<div>{todo.value}</div>)}
      <div className={styles.btndiv}>
      <button className={styles.btn1} onClick={()=>setisEditable(!isEditable)}>Edit</button>
      <button className={styles.btn} onClick={deleteTodo}>Delete</button>

      </div>
      </div>
    </div>
    </>
  )

  
  
}
