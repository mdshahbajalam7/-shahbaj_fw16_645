import data from "./Data.json"
// import React, { useState } from "react"
import ResturentItem from "./ResturentItem"
import styles from "./data.module.css"
import React, { useEffect, useState } from "react"

const RestaurantDetails = ()=>{
    // console.log(data)
    // const [data,setdata]=useState("")
    const [alldata,setalldata]=useState("")
    const [starrating,setstarrating]=useState(data)

    useEffect(()=>{
        fetch("http://localhost:3000/Restaurant")
        .then(res=>res.json())
        .then(data=>setstarrating(data))
    },[])
    const handleChange=(e)=>{
        const inputName = e.target.name
        if(e.target.type==="image"){
            setalldata({
                ...alldata,
                [inputName]:e.target.image
            })
        }else if(e.target.type==="checkbox"){
            setalldata({
                ...alldata,
                [inputName]:e.target.checked
            })
        }else{
            setalldata({
                ...alldata,
                [inputName]:e.target.value
            })

        }

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("hello")
        console.log(alldata);
    }
    // const Restaurantitem = async(()=>{
    //     res = await fetch("http://localhost:3000/Restaurant",{
    //        method:"POST",
    //        headers:{"content-type":"application/json"},
    //        body:JSON.stringify() 
    //     })
    //     let data = await res.json()
    //     console.log(data)
    // })
    // Restaurant()


    const clickstart1 = ()=>{
        const filter1=data.filter((elem)=>elem.rating >=1 && elem.rating <2)
        setstarrating(filter1)
    }
    const clickstart2 = ()=>{
        const filter2=data.filter((elem)=>elem.rating >=2 && elem.rating <3)
        setstarrating(filter2)
    }
    const clickstart3 = ()=>{
        const filter3=data.filter((elem)=>elem.rating >=3 && elem.rating <4)
        setstarrating(filter3)

    }
    const clickstart4 = ()=>{
        const filter4=data.filter((elem)=>elem.rating >=4 && elem.rating <5)
        setstarrating(filter4)

    }
    const h2l=()=>{
        const sort2 = data.sort((a,b)=>b.cost-a.cost)
        const sortdata = data.map((elem)=>elem)
        setstarrating(sortdata)
        
        // setstarrating(sort1)
    }
    const l2h = ()=>{
        const sort1 = data.sort((a,b)=>a.cost-b.cost)
        const sortdata = data.map((elem)=>elem)
        console.log(sort1)
        setstarrating(sortdata)
        // console.log(sort2)
    }
    const card_methods = ()=>{
        const card=data.filter((elem)=>elem.payment==="card")
        setstarrating(card)

    }
    const cash_methods = ()=>{
        const card1=data.filter((elem)=>elem.payment==="cash")
        setstarrating(card1)

    }
    const all_methods =  ()=>{
        const card2=data.filter((elem)=>elem.payment==="all")
        setstarrating(card2)

    }

    return (
        
        <>
        <div className={styles.main}>
        <h1> MY RESTAURANT_DETAILS</h1>
        <div className={styles.button}>
            <h4 className={styles.htag}> sort with ratings: </h4>
           <button className={styles.button1} onClick={clickstart1}>1 star</button>
           <button className={styles.button1} onClick={clickstart2} >2 star</button>
           <button className={styles.button1} onClick={clickstart3} >3 star</button>
           <button className={styles.button1} onClick={clickstart4} >4 star</button>
       </div>
       <div className={styles.sort}>
           <label>Sort: </label>
           <button className={styles.button2} onClick={h2l}>high to low</button>
           <label htmlFor="">     </label>
           <button className={styles.button2} onClick={l2h} >low to high</button>
       </div>
       <div className={styles.cashbutton}>
           <label htmlFor="">payment: </label>
           <button className={styles.button2} onClick={card_methods} > card accepted</button>
           <label htmlFor="">     </label>
           <button className={styles.button3} onClick={cash_methods} >cash</button>
           <label htmlFor="">     </label>
           <button className={styles.button3} onClick={all_methods} >all_Card</button>
       </div>
       </div>
       <form onSubmit={handleSubmit}>
            <div className={styles.container1}>
                <div> 
                 <label htmlFor="">Name </label>
                <input type="text" name="name" placeholder="products_name" onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="">cost</label>
                <input type="Number" name="cost" placeholder="Product_price" onChange={handleChange}/>
                </div>
                <div> 
                     <label htmlFor="">Img_url </label>
                    <input type="text" name="image" placeholder="Img_url" onChange={handleChange} />
                </div> 
                <div>
                    <label htmlFor="">Rating </label>
                    <input type="Number" name="rating" placeholder="Rating" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Voter </label>
                    <input type="Number" name="voter" placeholder="Voter" onChange={handleChange} />
                </div>
                <div> 
                    <label htmlFor="">category </label>
                    <select name="category" onChange={handleChange} >
                        <option onChange={handleChange}>category</option>
                        <option onChange={handleChange}>Vag</option>
                        <option onChange={handleChange}>Non_vag</option>
                    </select>
                </div>
                <div> 
                    <label onChange={handleChange}>Payments</label>
                    <label >Card</label>
                    <input type="checkbox" name="payment" id="" onChange={handleChange} />
                </div>
                <div>
                    <label onChange={handleChange}>Cash</label>
                    <input type="checkbox" name="payment" id=""  onChange={handleChange}/>
                </div>
                <div> 
                    <label onChange={handleChange}>all_Card</label>
                    <input type="checkbox" name="payment" id="" onChange={handleChange} /> 
                 </div> 
                 <input type="submit" name="submit" value="submit" />

            </div>
        </form>
        <div className={styles.container}>
            {starrating.map((item)=>{
                return <ResturentItem key="props"{...item}/>
            })}
        </div>
        </>
    
    )
}

export default RestaurantDetails