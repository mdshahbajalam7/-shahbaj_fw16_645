import React, { useContext } from 'react'
import { AuthContext } from '../Components/Authcontext'
import Productdata from './Productdata'
// import Products from './Products'

function Cart() {
    const {cartData, setcartData}=useContext(AuthContext)
    console.log("cartData",cartData)
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"20px", margin:"auto 3%",marginTop:"20px"}}>
        {cartData.map((elem)=> {
            return(
                < Productdata key={elem.id} {...elem}/>
            )
        })}
    </div>
  )
}
export default Cart