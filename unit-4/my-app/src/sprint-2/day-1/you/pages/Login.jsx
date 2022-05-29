import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// import Google from '../components/Google'
// import SignIn from '../components/SignIn'
// import SignUp from '../components/SignUp'

function Login() {
  const navigate=useNavigate()
  return (
    <div>
      <h1>login_page</h1>
      <h1>
        <button onClick={()=>navigate("/login/Sign-in")}>Sign-in</button>
        <button onClick={()=>navigate("/login/Sign-up")}>Sign-up</button>
        <button onClick={()=>navigate("/login/Sign-in-google")}>Login with google</button>
        <div>
          <Outlet/>
        </div>
      </h1>
    </div>
  )
}

export default Login