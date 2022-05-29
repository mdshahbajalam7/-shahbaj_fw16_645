import React, { useState } from "react"
// import React from 'react'


export const Counter = ()=>{
    const [count,setCount]=useState(0)

    const hendleInc = ()=>{
         setCount(count+1)
    }
    const hendleDec = ()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    return (
        <>
        <div>
        <div><h1>Counter: {count}</h1></div>
        <div>
            <button onClick={hendleInc}>Increment</button>
            <button  onClick={hendleDec}>Decrement</button>
        </div>
        </div>
        </>
        
    )
}