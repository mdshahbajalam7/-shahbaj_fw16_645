import React, { useContext} from 'react'
import { Navbardiv } from './Theme.styled'
import { ThemeContext } from './ThemeProvider'

function Navbar() {
  const [Theme,Themetoggle]=useContext(ThemeContext)
  return (
    <Navbardiv style={{backgroundColor:"teal"}}>
      <h1 style={{margin:"0px",color:"white"}}>MY Dashboard</h1>
      <div>{Theme==="white"?<button style={{marginLeft:"20px",marginTop:"7px",background:"black",color:"White",border:"none",height:"30px",borderRadius:"5px"}} onClick={()=>Themetoggle()}> Light Mode</button>:
      <button style={{marginLeft:"20px",marginTop:"7px",background:"gray",color:"White",border:"none",height:"30px",borderRadius:"5px"}} onClick={()=>Themetoggle()}>Drak Mode</button>}
      </div>
    </Navbardiv>
  )
}

export default Navbar