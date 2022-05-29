import React, { Children } from 'react'
// import TodoInput from '../../REACT-REDUX/components/TodoInput'
import TodoList from '../components/TodoList'
// import TodoInput from '../components/TodoInput'
import { Link,Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home({Children}) {
    const  isAuth = useSelector((state)=>state.auth.token)
    console.log(isAuth)
    if(!isAuth) return   <h3>Click here <Link to="/login" >LOGIN</Link> access to login page</h3>
  return (
    <div style={{marginLeft:"10px"}}>
        <TodoList/>
    </div>
  )
}

export default Home