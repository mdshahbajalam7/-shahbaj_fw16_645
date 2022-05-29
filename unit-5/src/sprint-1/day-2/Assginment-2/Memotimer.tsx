import React, { useCallback, useState } from 'react'
import { Memoverify } from './Memo/Memopost'
import { MemoisedTimer } from './Memo/Timers'
import "./Memo/data.css"
type Timer={
  timer:number
}
type verypost={
    id:number,
    title:string
    body:string
    verify: boolean
}

function Memotimer() {
    const [timer,settimer]=useState(0)
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const [list,setlist]=useState<verypost[]>([])


    const hendleVerify = (id:number)=>{
      setlist(list.map((elem)=>(elem.id===id ? {...elem, verify:!elem.verify}:elem)))
    }

    const callback=useCallback(hendleVerify,[list])

    const handlesubmit=()=>{
      console.log(title)
      console.log(body);
      setlist([...list,{id:Math.random(),title,body,verify:false}])
      
    }
  return (
    <>
    <div className='timediv'>
      <MemoisedTimer timer={timer} settimer={settimer}/>
    </div>
    <div>
      <input className='title' type="text"  placeholder='Enter Title' onChange={(e)=>settitle(e.target.value)} />
      <br />
      <textarea className='body'  placeholder='Enter Body' onChange={(e)=>setbody(e.target.value)} />
      <br />
      <button className='btn' onClick={handlesubmit}>ADD</button>
    </div>
    {list.map((elem)=>(
      <Memoverify key={elem.id} {...elem}  hendleVerify={callback}/>
    ))}
    </>
  )
}

export default Memotimer