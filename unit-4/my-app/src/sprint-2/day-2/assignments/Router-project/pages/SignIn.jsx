import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/Authcontext'

function SignIn() {
    const [fromdata,setfromdata]=useState()
    // const {Login} = useContext(AuthContext) 
    const { token, Login, signData, setsignData } = useContext(AuthContext);

    const handleChange=(e)=>{
        const inputNmae =e.target.name
        if(e.target.type==="Checkbox"){
            setfromdata({
                ...fromdata,
                [inputNmae]:e.target.checked
            })
        }else{
            setfromdata({
                ...fromdata,
                [inputNmae]:e.target.value
            })
        }
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        // console.log("hello")
        setsignData(fromdata)
        Login()
        console.log(fromdata)
    }
  return (
    <div >
        <form onSubmit={handlesubmit}>
            <div>
                <label style={{fontSize:"20px"}}>Username:-</label>
                <input style={{width:"20%"}} type="text" name="Username" placeholder='Enter_username' onChange={handleChange} />
            </div>
            <div>
                <label style={{fontSize:"20px"}}>Password:-</label>
                <input style={{width:"20%"}} type="Password" name="password" placeholder='User_Enter_password' onChange={handleChange}/>
            </div>
            <div>
                <label style={{fontSize:"20px"}}>Password</label>
            <input  type="Checkbox" name="password"   onChange={handleChange}/>
            </div>
            <div>
                <input style={{width:"8%",backgroundColor:"black",color:"white",border:"none",
                borderRadius:"5px",
                height:"30px"}} type="Submit" value="signin"  />
            </div>
        </form>
    </div>
  )
}

export default SignIn