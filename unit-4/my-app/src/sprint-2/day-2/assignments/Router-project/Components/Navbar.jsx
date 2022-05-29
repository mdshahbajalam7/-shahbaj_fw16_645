import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Authcontext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import styles from "../pages/Home.module.css"


function Navbar() {
    const { cartData,token,Logout } = useContext(AuthContext);
  return (
    <div style={{ width:"90%",height:"20px",margin:"auto",color:"white",marginTop:"10px",
    border:"1px solid red",padding:"30px",backgroundColor:"teal",
     borderRadius:"30px",display:"flex" , gap:"28Px" ,}}> 
         <p style={{marginTop:"-5px",fontSize:"25px",cursor:"no-drop"}}>Big_market</p>
         <p style={{marginTop:"-5px",fontSize:"25px",marginLeft:"30%",cursor:"no-drop"}}>Search</p>
         <div style={{marginLeft:"15%"}}>
             <Link to="/home">Home</Link>
         </div>
         <div className={StyleSheet.nav}>  
             <Link to="login">Login</Link>
             {/* <a href="">i></a> */}
         </div>
         <div className={StyleSheet.nav}>
             <Link to="/categories">Categories</Link>
         </div>
         <div className={StyleSheet.nav}>
             <Link to="/About">About</Link>
         </div>
         <div className={StyleSheet.nav}>
             <Link to="/FQA">FAQ</Link>
         </div>
         <div className={StyleSheet.nav}>
             <Link to="/Contact">Contact</Link>
         </div>
         <div className={StyleSheet.nav}>
             <Link to="/cart">Cart {cartData.length}</Link>
            
         </div>
         {/* <i class="fa-solid fa-cart-shopping-fast"/></i> */}
         
     </div>
  )
}
export default Navbar
