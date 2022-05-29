import React, { useContext, useState } from 'react'
import { AuthContext } from './context/AuthContext'
// import AuthProvider from

function LoginFrom() {
    const [from,setfrom]=useState({})
    const {login}=useContext(AuthContext)
    const handleChang = (e)=>{
        const InputName=e.target
        setfrom({
            ...from,
            [InputName.name]:InputName.value
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("hello");
        // console.log(e)
        login()
    }
  return (
    <div>LoginFrom
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">UserName</label>
                    <input type="text" name="username" id="" onChange={handleChang} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" onChange={handleChang} />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginFrom