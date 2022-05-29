// import { type } from 'os'
// import React from 'react'
import {useMergeState} from './useMergeState'
import "./Marge.css"

function Marge() {

     const initState = {
        username: "",
        email: "",
        password: "",
    }   
    const [ state, setState ] = useMergeState(initState)
    
    const handlesubmit=(e:any)=>{
        e.preventDefault()
        console.log(state);
    }
  return (
    <div className='formdiv'>
        <form onSubmit={handlesubmit}>
            <input type="text" name="username" placeholder='Enter username' 
            onChange={(e)=>setState({...state,[e.target.name]:e.target.value})} />
            <br />
            <input type="text" name="email" placeholder='Enter Email '
            onChange={(e)=>setState({...state,[e.target.name]:e.target.value})} />
            <br />
            <input type="password" name="password" placeholder='Enter password' 
            onChange={(e)=>setState({...state,[e.target.name]:e.target.value})} />
            <br />
            <input className='sub' type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Marge