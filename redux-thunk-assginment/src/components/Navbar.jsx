import React from 'react'
// import Login from '../pages/Login'
import styles from "../pages/Login.module.css"
import { Link} from "react-router-dom"
// import Home from '../pages/Home'

function Navbar() {
  return (
    <>
    <div className={styles.navbar}>
    {/* <Link to="login">Login</Link> */}
    <Link to="Home">Home</Link>
    </div>
    <h3>User Click here <Link to="/signin">SignIn</Link></h3>
    </>
    
    
  )
}

export default Navbar