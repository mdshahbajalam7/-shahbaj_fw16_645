import React, { useState } from 'react'
import styles from "../pages/Login.module.css"
// import { useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'

function SignIn() {
    // let dispatch = useDispatch()
    const navigation = useNavigate()
    // const location = useLocation()
    const [formdata,setformdata]=useState()

    const getdata = async()=>{
        try {
            let res = await fetch("https://reqres.in/api/login",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(formdata)
            })
            let data = await res.json()
            console.log(data);
            if(data.token){
                navigation("/home")
            }

            
        } catch (error) {
            console.log("error",error)
            
        }
    }
    
    const handlechange=(e)=>{
        const inpurtName=e.target.name
        setformdata({
            ...formdata,
            [inpurtName]:e.target.value
        })
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        // setformdata(formdata)
        // console.log("hello")
        getdata(formdata)
        // console.log(formdata)
    }
  return (
      <>
      <h3>sigin_pages</h3>
    <div className={styles.form}>
       <div className={styles.formdiv}>
       <form onSubmit={handlesubmit}>
            <div>
                <label>UserName </label>
                <input type="text" name='username' placeholder='EnterUserName' onChange={handlechange} />
            </div>
            <div>
                <label>Password </label>
                <input type="password" name="password" placeholder='EnterPassword' onChange={handlechange} />
            </div>
            <div className={styles.submit}>
                <input  style={{backgroundColor:"black",color:"white",height:"40px",
                fontFamily:"sans-serif",fontSize:"20px"}} type="submit" value="Login" />
            </div>

        </form>
       </div>
    </div>
    </>
  )
}

export default SignIn