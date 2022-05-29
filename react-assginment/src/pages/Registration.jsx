import React, { useState } from 'react'
import styles from "../pages/data.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Registration() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [formdata,setformdata]=useState({})
    const handlechange=(e)=>{
        const InputName=e.target.name
        setformdata({
            ...formdata,
            [InputName]:e.target.value
        })
    }

    const handlesubmit=(e)=>{
        e.preventDefault()     
        axios.post("https://masai-api-mocker.herokuapp.com/auth/register",formdata)
        .then(res=>console.log(res.data))
        .catch(Error=>console.log(Error))
        navigation(!formdata?!formdata:"/login")
        console.log(formdata)
        dispatch(formdata)

    }
  return (
    <div className={styles.Registration}>  
        <h3>Registration</h3>
        <form onSubmit={handlesubmit}>
            <div >
                <input type="text" name="name" placeholder='Enter_name' onChange={handlechange} />
            </div>
            <div>
                <input type="text" name="email" placeholder=' Enter_Email' onChange={handlechange} />
            </div>
            <div>
                <input type="password" name="password" placeholder='Enter_password' onChange={handlechange} />
            </div>
            <div>
                <input type="text" name="username" placeholder='Enter_username' onChange={handlechange} />
            </div>
            <div>
                <input type="Number" maxLength="10" name="mobile" placeholder='Enter_Mobile_Number' onChange={handlechange} />
            </div>
            <div>
                <textarea  type="text" name="description" placeholder=' Enter Description ' onChange={handlechange} />
            </div>
            <div>
                <input className={styles.res} type="submit" name="submit" value="Registration" />
            </div>
            <h3>If already register click on <a href="login">Login</a></h3>

        </form>
    </div>
    // </div>
  )
}

export default Registration

// "name": "MASAI School",
//   "email": "hello@masai.com"
//   "password": "secret",
//   "username": "masai-school",
//   "mobile": "9876543210",
//   "description": "A Transformation in education!" 