import React, { useContext } from 'react'
import { AuthContext } from './AuthContexts'

function Navbar() {
  const {isAuth,logout}=useContext(AuthContext)
  return (
    
    <>
    {!isAuth ? <div style={{background:"teal",
       display:"flex" ,justifyContent:"space-evenly",
      height:"50px",alignItems:"center"}}>
         <div style={{widht:"60px",height:"25px",border:"1px solid white",color:"white"}}>MASAI SCHOOL</div>
         <div style={{widht:"50px",height:"25px",border:"1px solid white",color:"white",margin:"120px"}}>SEARCH</div>
          <div>
            <button style={{width:"100px", background:"blue" ,
             color:"white",border:"5px" ,height:"30px"}}
              onClick={()=>{""}} >Login</button>
            </div>
      </div>
      :<div style={{background:"black",
      display:"flex" ,justifyContent:"space-evenly",
     height:"50px",alignItems:"center"}}>
        <div style={{widht:"60px",height:"25px",border:"1px solid white",color:"white"}}>MASAI SCHOOL</div>
        <div style={{widht:"50px",height:"25px",border:"1px solid white",color:"white",margin:"120px"}}>SEARCH</div>
      <div>
      <button style={{width:"100px", background:"blue" , 
      color:"white",border:"5px" ,height:"30px"}}
       onClick={()=>{logout()}}>Logout</button>
      </div>
      </div>}
    </>
      
  )
}

export default Navbar


