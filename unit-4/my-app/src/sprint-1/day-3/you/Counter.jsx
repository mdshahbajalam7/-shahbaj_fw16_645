import { useRef, useState } from "react"
import React from "react"

// let x=0
export const  Counter=()=>{
    const [count,setcount]=useState(0)
    const refX = useRef(10)
    console.log("value of x",refX.current)
    // let x=0



    return (
        <div>
            <h1>Counter:{count}</h1>
            <div>
                <button onClick={()=>{
                    setcount(count+1)
                    refX.current = refX.current+1
                    // x= x+1
                    console.log("new x",refX.current);
                }}>Increment</button>
                <button onClick={()=>{
                     refX.current = refX.current+1
                     console.log("new x",refX.current);
                    // if(count>0){
                    //     setcount(count-1)
                    // }
                }}>Do Nothing</button>
            </div>
        </div>
        // <button></button>
    )
}