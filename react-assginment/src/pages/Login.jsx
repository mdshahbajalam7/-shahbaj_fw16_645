
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginaction } from '../components/action'
import styles from "../pages/data.module.css"

function Login() {
    const dispatch = useDispatch()
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const navigation = useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        navigation(!username?password:"/displaydata")
        const logindata={
            username,
            password

        }
        console.log(logindata)
        // axios.post("https://masai-api-mocker.herokuapp.com/auth/login",logindata)
        // .then(res=>console.log(res.data))
        // .catch(e=>console.log(e))
        loginaction(dispatch,logindata);

    }
  return (
    <div className={styles.logindiv}>
        <h1>Login</h1>
        <form onSubmit={handlesubmit}>
            <div>
            <input type="text" value={username} placeholder="Enter username" onChange={(e)=>setusername(e.target.value)} />
            <br />
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)}/>
            <br />
            <input className={styles.sub} type="submit" value="Login" />
            </div>
            <h3>If you not registration click on<a href="Registration">Registration</a></h3>
        </form>
    </div>
  )
}

export default Login