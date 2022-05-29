import React from 'react'
import styles from "./data.module.css"

function CreditCard({data}) {
    console.log(data)
    const {cardholdername,cardnumber,cvc ,expirymonth,expiryyear}=data

  return (
    <div>
        <div className={styles.container}>
            <div className={styles.underdiv}>
                <div className={styles.a}>
                    <img className={styles.card} src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Visa-europe-logo.gif" alt="" />
                </div>
                <div className={styles.b}>
                    <img className={styles.chip} src="https://t3.ftcdn.net/jpg/01/22/06/72/360_F_122067245_li2zr9npi1aZZ6dto4SNgxAFKt302X7d.jpg" alt="" />
                </div>
                <div className={styles.c}>{cardnumber?cardnumber:"xxxx  xxxx  xxxx  xxxx"}</div>
                <div className={styles.flex}>
                <div className={styles.d}>CARD HOLDER
                    <div className={styles.d1}>{cardholdername?cardholdername:"XXXXXXXXXXXXXXXXXXXX"}</div>
                </div>
                <div className={styles.e}>MM/YY
                    <div className={styles.e1}>{expirymonth?expirymonth:"xx"}/{expiryyear?expiryyear:"xx"}</div>
                </div>
                <div className={styles.f}>CVC
                    <div className={styles.f1}>{cvc?cvc:"xxx"}</div>
                </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default CreditCard
// https://t3.ftcdn.net/jpg/01/22/06/72/360_F_122067245_li2zr9npi1aZZ6dto4SNgxAFKt302X7d.jpg