import React, { useContext } from 'react'
import { AuthContext } from '../Components/Authcontext'
import styles from "../pages/Home.module.css"

function Productdata(props) {
    const {cartData, setcartData}=useContext(AuthContext)
    const {image,price,category,title,id}=props
    // cartButton
    const handleremove=()=>{
        let remove = cartData.filter((elem)=>elem.id!==props.id)
      setcartData(remove)
      console.log(props)
    }
    
  return (
    <>
   <div className={styles.main}>
   <div><img style={{width:"250px"}} src={image }alt="" /></div>
   <div>{id}{id}</div>
    <div  style={{fontSize:"20px"}}>{"Category:-"}{category}</div>
    <div style={{fontSize:"20px"}}>{"Title:-"}{title}</div>
    <div>{"$"} {price}</div>
    <div>
        <button onClick={()=>handleremove()} >Remove</button>
    </div>
   </div>
    </>
  )
}

export default Productdata