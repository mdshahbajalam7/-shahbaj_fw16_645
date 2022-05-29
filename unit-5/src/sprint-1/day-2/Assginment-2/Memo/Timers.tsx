import React, { memo, useEffect } from 'react'
// import "./Memo.css"

function Timers(props:any) {
    // console.log("timer rendering")
    useEffect(() => {
         setInterval(() => {
          props.settimer((prev: number) => prev + 1);
        }, 1000);
    }, [])
  return (
    <h3>
        Timer: {props.timer%60} sec.
    </h3>
  )
}


export const MemoisedTimer = memo(Timers)


export default Timers