import React from 'react'
import { useState } from 'react'
import "./btn.css"

function Button() {
    let [count,setcount]=useState(0)
  return (
    <div className='container'>
        <h1 className='counter'>Counter:{count}</h1>
        <button className='btn1' onClick={()=>setcount(count+5)}>ADD 5</button>
        <button className='btn1' onClick={()=>setcount(count-5)}>REDUCE 5</button>

    </div>
  )
}

export default Button