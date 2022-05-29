import React from "react"
import styles from "./data.module.css"

const ResturentItem=(props)=>{
    // console.log(props)

    const {imgurl,name,cost,categories,reviews,votes,card_payment,rating}=props

    const namelist = ()=>{
        
    }
    

    return (
        
        <>
        <div className={styles.mainDiv}>
        {/* <img src={imgurl} alt="" /> */}
          <div className={styles.imgdiv}>
          <img className={styles.img} src={imgurl}alt="img_name" />
          </div>
          <div className={styles.namediv}>
          <h3>{name}</h3>
          <p>{categories}</p>
          <p>{"cost ₹ "}{cost} {"(for one)"}</p>
          <p>{"Min ₹50"}
          <li>up to 30 min</li>
          </p>
            <p>{card_payment}</p>
            <input className={styles.input} type="text" />
            <button className={styles.btn} onClick={namelist} >Order Online</button>
          </div>
          <div className={styles.ratingdiv}>
              <div  className={styles.smalldiv}>
              <p className={styles.ptag}>{rating}*</p>
              </div>
             <div className={styles.voterdiv}>
             <p className={styles.vot}>{votes} {"Votes"}</p>
              <p>{reviews} {"Reviews"}</p>
             </div>
          </div>
        </div>
        </>
        
    )
}
export default ResturentItem