import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import TodoInput from '../../REACT-REDUX/components/TodoInput'
import { loginsucces } from '../Auth/action'
import TodoList from './TodoList'

function Login({handlelogin}) {
    const [email,setemail]= React.useState("")
    const [password,setpassword]=React.useState("")
    // const [from,setfrom]=useState({})
    const navigation = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"

    const getdata = async()=>{
      // pass cityslicka
        // email eve.holt@reqres.in
      try {
        let res = await fetch("https://reqres.in/api/login",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify({email,password})
        })
        let data = await res.json()
        console.log(data)
        if(data.token){
          dispatch(loginsucces(data.token ))
          navigation(from,{replace:true})
        }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    let dispatch = useDispatch()
    const handlesubmit = (e)=>{
        e.preventDefault()
        // console.log("hello")
        let payload={email,password}
        handlelogin(payload)
        getdata()
        // dispatch(handlelogin)
        console.log(payload)
      
    }
  return (
    <div>
        <h3 style={{color:"green"}}>Login From</h3>
        <form onSubmit={handlesubmit}>
        <input style={{width:"20%",height:"30px",backgroundColor:"aqua",fontSize:"20px"}}
         type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enter_email' />
        <br />
        <input value={password} type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='password'  style={{width:"20%",height:"30px",
        backgroundColor:"aqua",fontSize:"20px",
        marginTop:"10px"}} />
        <br />  
        <input type="submit" style={{width:"10%",height:"30px",marginTop:"10px",backgroundColor:"black",color:"white",borderRadius:"5px",fontSize:"20px"}} />
        </form>
        </div>
  )
}

export default Login