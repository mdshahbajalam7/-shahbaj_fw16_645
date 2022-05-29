import React, { useMemo, useState } from 'react'

function Fibo() {
    
    const [ num,setnum ]=useState(5)
    const [counter,setcounter]=useState(0)

    const fibo =(n:number):number=>{
        console.log("calculating fibo ");
        
      if(n<=1){
        return n
      }
      return fibo(n-1)+fibo(n-2);
  
    }
    // console.time("t1")
    // const nthfibo = fibo(num)
    const nthfibo = useMemo(()=>fibo(num),[num])
    // console.timeEnd("t1")
  
    // const memoisedfibo=useMemo(()=>{
    //   return fibo(Number(text))
    // },[text])
  
    // const calfibo=()=>{
    //   console.log("nth fibo",memoisedfibo)
    // }  

    return(
        <>
        <h4>fibo of {num} is {nthfibo} </h4>
        <button onClick={()=>setnum(num+1)}>Add 1 to {num}</button>
        <h4>counter:{counter}</h4>
        <button onClick={()=>setcounter(counter+1)}>Counter</button>
        {/* <input type="text" onChange={(e)=>settext (e.target.value)} /> */}
        {/* <button onClick={calfibo}>calculate</button> */}
        </>
    )
}

export default Fibo