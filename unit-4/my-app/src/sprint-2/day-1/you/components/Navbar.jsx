import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  // const navigate=useNavigate()
  return (
    <div style={{marginBottom:"10px",
    fontSize:"30px",color:"white",
    padding:"30px",border:"1px solid black",
    background:"teal",display:"flex",gap:"20px"}}>
      <div>
        <Link to="/home">Home</Link>
      </div>
     <div>
     <Link to="/About">About</Link>
     </div>
   {/* <div>
   <Link to="/Contact">Contact</Link>
   </div> */}
    <div>
    <Link to="/login">Login</Link>
    </div>
    <div>
    <Link to="/counter">Counter</Link>
    </div>
    <div>
    <Link to="/products">Products</Link>
    </div>
    
      </div>
  )
}

export default Navbar