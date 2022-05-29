import React, { useState } from 'react'
import styles from "./data.module.css"

function CreditCardFrom({data,setdata}) {
    const [formdata,setformdata]=useState({})
    const handleChange=(e)=>{
        const InputName=e.target.name
        setformdata({
            ...formdata,
            [InputName]:e.target.value
        })

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
        console.log("hello")
        setdata({...data,...formdata})



    }
  return (
    <div>
         <div className={styles.fromdiv}>
             <h3>Payment Details</h3>
             <form onSubmit={handlesubmit}>
                 <div>
                 <ptag className={styles.p}>CARD HOLDER NAME</ptag>
                 <div>
                     <input type="text" name="cardholdername" onChange={handleChange} />
                 </div>
                 </div>
                 <div>
                     <ptag className={styles.p}>CARD NUMBER</ptag>
                     <input type="number" name="cardnumber" onChange={handleChange} />
                 </div>
                 <div className={styles.div}>
                 <div>
                 <ptag className={styles.p}>EXPIRY MONTH</ptag>
                 <input  type="Number" name="expirymonth" onChange={handleChange}/>
                 </div>
                 <div>
                     <ptag className={styles.p}>EXPIRY YEAR</ptag>
                     <input typeof='date' type="Number" name="expiryyear" onChange={handleChange} />
                 </div>
                 <div>
                     <ptag className={styles.p}>CVC</ptag>
                     <input type="Number" name="cvc" onChange={handleChange} />
                 </div>
                 </div>
                 <div>
                     <label>Payment Ammount</label>
                     <input type="Number" name="paymemt" onChange={handleChange} />
                 </div>
                 <div>
                     < input type="submit" value="pay" name="" className={styles.btn} />
                 </div>
               
             </form>
         </div>
    </div>
  )
}

export default CreditCardFrom