import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
        // getTodos()
        // fetch("http://localhost:8000/todos")
        // .then(res=>res.json())
        // .then(data=>dispatch(data))
    },[])
  return (
    <div>
      <h1>Total_Todos:{todos.length}</h1>
    <div>
        <TodoInput/>   
    </div> 
    {/* <Link to={"/"}> */}
    {todos.map((elem)=>
    <Todo key={elem.id}{...elem}/>)}
     {/* </Link> */}
    </div>
  ) 
}
export default Todos
