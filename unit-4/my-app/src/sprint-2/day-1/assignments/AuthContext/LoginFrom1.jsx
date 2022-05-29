import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContexts'
// import AuthProvider from

function LoginFrom1() {
    const [from,setfrom]=useState({})
    // const {login}=useContext(AuthContext)
    const {login} = useContext(AuthContext)
    const handleChang = (e)=>{
        const InputName=e.target
        setfrom({
            ...from,
            [InputName.name]:InputName.value
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log("hello");
        console.log(from)
        getdata(from)
        
    }
    const getdata = async(from)=>{
        // pass cityslicka
        // email eve.holt@reqres.in 
        try {
            let res = await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(from)
        })
        let data = await res.json()
        console.log(data)
        if(data.token){
            login()
        }

            
        } catch (error) {
            console.log(error)
        }
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

export default LoginFrom1