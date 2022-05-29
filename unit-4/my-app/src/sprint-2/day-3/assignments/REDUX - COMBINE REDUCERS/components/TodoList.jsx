import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Todo from './Todo'
import TodoInput from './TodoInput'

function TodoList() {
    const todos = useSelector((state)=>state.app.todos)
    const navigator = useNavigate()
    const {id}=useParams();
    console.log(todos)
  return (
    <>
    <TodoInput/> 
    <div>
    <div style={{marginTop:"10px",width:"30%",margin:"auto"}}>{todos.map((elem)=> <Todo key={elem.id} {...elem}/>)}</div>
    </div>
  </>
  )
}

export default TodoList