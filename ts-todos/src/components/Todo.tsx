// import React from 'react'
// import { type } from 'os';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
type TodosType={
    id:number,
    title:string,
    status:boolean
}
function Todo() {
 
    const [text,settext]=useState<string>("")
    const [todos,settodos]=useState<TodosType[]>([])

    useEffect(()=>{
        getdata()
    },[])

    const getdata=()=>{
        axios.get("http://localhost:3000/todos")
        .then((res:AxiosResponse<TodosType[]>)=>{
            const {data}=res;
            console.log(data.map((e)=>e.title))
            settodos(data)
        })
    }

  return (
      <>
    <div>
        <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />{" "}
        <button onClick={()=>{
            // id: Math.random(),
            const payload = {status:false,title: text};
            // Console.log(payload)
            axios.post("http://localhost:3000/todos",payload).then(getdata)
            // settodos([...todos,payload])
        }}>Add_Todos</button>
    </div>
    <div>
        {todos.map((elem)=>(
            <div key={elem.id}>
                {elem.title} - {elem.status? "Done": "Not Done"}
            </div>
        ))}
    </div>
    </>
  )
}

export default Todo