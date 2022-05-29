// import React from 'react'

import { useState } from "react"


type Counterprops={
    init?:number,
    children?:JSX.Element
}

function Counter(props:Counterprops) {
    const {init=5}=props
    const [counter,setcounter]=useState(init)
  return (
    
    <>
    <div>
    <h3>Counter:{counter}</h3>
    {/* {children} */}
    <button onClick={()=>setcounter(counter+1)}>Add</button>
    </div>
    </>


  )
}

export default Counter