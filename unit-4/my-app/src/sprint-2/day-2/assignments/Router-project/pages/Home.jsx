import React, { useEffect, useState } from 'react'
import Products from './Products';
import styles from "../pages/Home.module.css"
// import styles from "../pages/"

function Home() {
  const [product,setproduct]=useState()
  const [Filter,setfilter]=useState()
  useEffect(()=>{
    const getdata = async()=>{
      // url="https://fakestoreapi.com/products"
      // http://localhost:3000/data
     let res = await fetch("https://fakestoreapi.com/products")
     let data = await res.json()
     setproduct(data)
     setfilter(data)
     console.log(data)
    };
    getdata()
  },[])
  
  const all=()=>{
    setproduct(Filter)  

  }
  const man=()=>{
    const updata =Filter.filter((elem)=>elem.category==="men's clothing")
    setproduct(updata)
  }
  const woman=()=>{
    const updetedata = Filter.filter((elem)=>elem.category==="women's clothing")
    setproduct(updetedata)

  }
  const jewelery=()=>{
    const updetedata = Filter.filter((elem)=>elem.category==="jewelery")
    setproduct(updetedata)

  }
  const electronic=()=>{
    const updetedata = Filter.filter((elem)=>elem.category==="electronics")
    setproduct(updetedata)

  }
  return (!product?(<h1>loading....</h1>):
    <div>
        <h1>
            <div style={{width:"90%",height:"4 00px",margin:"auto"}}>
              <img  style={{width:"100%",height:"400px"}} src="https://www.addictioncenter.com/app/uploads/2020/01/online_shopping_addiction-scaled.jpeg" alt="" />
            </div>
            <p>Latest Products</p>
            <div className={styles.button}>
              <button className={styles.btn1} onClick={all}>All</button>
              <button className={styles.btn2} onClick={man}>Men's Clothing</button>
              <button className={styles.btn3} onClick={woman}>Woman's Clothing</button>
              <button className={styles.btn4} onClick={jewelery}>Jewelery</button>
              <button className={styles.btn5} onClick={electronic}>Electronic</button> 
            </div>
          <div className={styles.datadiv} >
            {product.map((elem)=> {
              return(
                <Products key={elem.id} {...elem}/>
              )
            } )}
            
          </div> 
        </h1>
    </div>
    
  )
}

export default Home