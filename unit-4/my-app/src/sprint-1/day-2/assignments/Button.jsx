import { useState } from "react"

function Button(){
    const [counter ,setCount] = useState(0)

    const handleInc = (steps)=>{
        setCount(counter+steps)
    }
    const handleDec = (steps)=>{
        if(counter>0){
            setCount(counter-steps)
        }
    }
    const handlemult=(steps)=>{
        setCount(counter*steps)
    }
    return (
        <>
        <h1 style={{background:"green"}}>Counter App</h1>
        <h1 style={{color:"orange"}}>{counter}</h1>
        <button style={{background:"teal", height:"30px",borderRadius:"5px"}} onClick={()=>handleInc(1)}>increment</button>
        <button style={{background:"red",marginLeft:"20px",height:"30px",borderRadius:"5px"}} onClick={()=>handleDec(1)}>decrement </button>
        <button style={{background:"yellow",margin:"20px",height:"30px",borderRadius:"5px"}} onClick={()=>handlemult(2)}>Double</button>
        <button style={{background:"blue",color:"white",margin:"10px",height:"30px",width:"60px",borderRadius:"5px"}} onClick={()=>handlemult(0)}>Rest</button>
        </>
    )
}

export default Button