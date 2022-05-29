// import React from 'react'
// import "./otp.css"

import { useState } from "react";


type Element={title:string,desc:string}

type AccordenType={
    data:Element[]
}

function Accordian({data}:AccordenType) {
    console.log(data[1]);
    const [opened,setopened]=useState<number[]>([0,5])
    const handleopen=(index:number)=>{
        if(opened.includes(index)){
            // remove index for opened
        }else{
            setopened([...opened,index])
        }

    }
    
  return (
    <div>
        {data.map((elem,index)=>(
            <Card title={elem.title} 
            desc={elem.desc}
             isvisible={opened.includes(index)} 
             index={index}
             handleopen={handleopen}
             />
        ))}
    </div>
  )
}

export default Accordian

type Cardprops={
    title:string;
    desc:string;
    index:number
    isvisible:boolean
    handleopen:(i: number)=>void

}


export const Card=({desc,index,title,isvisible,handleopen}:Cardprops)=>{
    return <>
    <div className="Acccontainer">
        <h3 onClick={()=>handleopen(index)}>{title}</h3>
        {isvisible &&<p>{desc}</p>}
    </div>
    </>

}