import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginfailure, loginsucces } from '../Auth/action'
import Login from '../components/Login'

function Loginpage() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state)=>state.auth.isAuth)
  const handlelogin=({email,password})=>{
    if(email==="chand" && password==="12345"){
      const action = loginsucces("fake Token")
      dispatch(action)
    }
    else{
      const action = loginfailure("error")
      dispatch(action)
    }
   

  }
  return (
    <div >
        <Login handlelogin={handlelogin}/>
    </div>
  )
}

export default Loginpage 