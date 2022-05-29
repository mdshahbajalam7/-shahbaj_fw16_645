import React, { useContext } from 'react'
// import {styles} from "../pages/Home/Home.module.css"
import styles from "../pages/Home.module.css"
import { AuthContext } from '../Components/Authcontext'
import AddToCart from '../Components/AddToCart'

function Products(props) {
  const {cartData, setcartData}=useContext(AuthContext)
    const {image,price,category,title,id}=props
    // cartButton
    const handlecart=()=>{
      setcartData([...cartData,props])
      console.log(props)
    }
  return (
    <>
   <div className={styles.main}>
   <div><img style={{width:"250px",height:"300px"}} src={image }alt="" /></div>
   <div>{id}{id}</div>
    <div  style={{fontSize:"20px"}}>{"Category:-"}{category}</div>
    <div style={{fontSize:"20px"}}>{"Title:-"}{title}</div>
    <div>{"$"} {price}</div>
    <div>
    <AddToCart handlecart={handlecart} />
    </div>
   </div>
    </>
  )
}

export default Products