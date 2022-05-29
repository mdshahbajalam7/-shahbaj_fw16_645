import React, { useEffect, useState } from 'react'
import { AddTodo } from './AddTodo'
import { Todo } from './Todo'

export const Todos = () => {
  const [todos,settodos]=useState([])
  const [pageNumber,setpageNumber]=useState(1)

  
  const onAdd=(newTodo)=>{
        // pOST
        settodos([...todos,newTodo]) 
    };
    const onDelete = id=>{
      const newTodos = todos.filter((todo)=>todo.id !==id)
      settodos(newTodos)
    }
    const onEdit = (newTodo)=>{
      const newTodos = todos.map((todo)=>{
        if(todo.id===newTodo.id) return newTodo
        else return todo
      })
      settodos(newTodos)
    }
    // http://localhost:3000/todos
    // getTodos()
    useEffect(()=>{
      const getTodos = async ()=>{
        try{
          let res = await fetch(`http://localhost:3000/todos?_page=${pageNumber}`)
          let data = await res.json()
          console.log(data)
          settodos(data)
  
        } catch(e){
          console.log("e",e)
        }
      }
      getTodos()
    },[pageNumber])

  return (
    <div>
      {pageNumber}
      <AddTodo onAdd={onAdd}/>
      {todos.map((todo)=>( 
         <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
          ))}
          <div className='container'>
            <button onClick={()=>{
              if(pageNumber>1){
                setpageNumber(pageNumber-1)
              }
            }}
            >
              Previous</button>
            <button onClick={()=>setpageNumber(pageNumber+1)}>Next</button>
          </div>
    </div>
  )
}
