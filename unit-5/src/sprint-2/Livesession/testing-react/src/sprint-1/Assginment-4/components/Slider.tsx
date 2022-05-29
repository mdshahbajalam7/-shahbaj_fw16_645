import { useState } from "react";
import "./btn.css"


type Element={id:number;answer:string,question:string}

type testingslider={
    data:Element[]
}

function Slider({data}:testingslider) {
    const [opened,setopened]=useState<number[]>([0,5])
    // const [closed,setclosed]=useState(true)
    const  handleopen=(index:number)=>{
        if(opened.includes(index)){
            opened.splice(index,1)
            console.log(index);
            
        }else{
            setopened([...opened,index])
        }
        
    }
  return (
    <div>
        {data.map((elem,index)=>(
            <Carddata key={elem.id}  id={elem.id}
            question={elem.question}
            answer={elem.answer}
            isvasible={opened.includes(index)}
            index={index}
            handleopen={handleopen}
            />
        ))}
    </div>
  )
}
export default Slider

type Cardprops={
    answer:string,
    question:string,
    id:number,
    index:number,
    isvasible:boolean,
    handleopen:(i:number)=>void
}

export const Carddata=({answer,question,index,id,isvasible,handleopen}:Cardprops)=>{
    return <>
    <div className="card">
        <p>{id}</p>
        <h1 onClick={()=>handleopen(index)}>{question}</h1>
        {isvasible && <p>{answer}</p>}
    </div>
    </>
}