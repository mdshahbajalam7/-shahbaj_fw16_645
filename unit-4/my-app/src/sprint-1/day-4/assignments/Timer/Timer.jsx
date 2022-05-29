import React, { useEffect, useState } from "react"
import styles from "./timer.module.css"
const Timer = ()=>{

    const [seconds,setseconds]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [hours,sethours]=useState(0)
    let timer;

    useEffect(()=>{
        timer = setInterval(()=>{
            setseconds(seconds+1)

            if(seconds===59){
                setMinutes(minutes+1)
                setseconds(0)
            }else if(minutes===59){
                sethours(hours+1)
                setMinutes(0)

            }
        },1000)


        return()=>clearInterval(timer)
    })
    const restart=()=>{
        setseconds(0)
        setMinutes(0)
        sethours(0)

    }
    const stop =()=>{
        clearInterval(timer)

    }
    return (
        <div className={styles.timer}>
            <div className={styles.container}>
                <div className={styles.timerdiv}>
                    <h1>Timer</h1>
                    <h1>{hours<10? "0"+hours:hours}h:{minutes<10? "0"+minutes:minutes}m:{seconds<10? "0"+seconds:seconds}s</h1>
                    <button className={styles.restart} onClick={restart}>Restart</button>
                    <button className={styles.stop} onClick={stop}>Stop</button>
                </div>
            </div>
        </div>
    )
}


export default Timer