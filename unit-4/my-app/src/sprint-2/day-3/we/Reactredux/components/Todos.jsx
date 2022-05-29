import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../action'
import Todo from './Todo'
import TodoInput from './TodoInput'

function Todos() {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()

    useEffect(()=>{
        getTodos(dispatch)
        // console.log("todos",action);
        // const getTodos = async()=>{
        //     let res = await fetch("http://localhost:8000/todos")
        //     let data = await res.json();
        //     dispatch(getTodos(data))
        // }
        getTodos()
        // fetch("http://localhost:8000/todos")
        // .then(res=>res.json())
        // .then(data=>dispatch(data))
    },[])
  return (
    <div>Todos:{todos.length-1}
    <div>
        <TodoInput/>
    </div>
    {todos.map(todo=> <Todo key={todo.id}
     {...todo}/>)}
    </div>
  )
}

export default Todos