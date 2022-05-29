import axios from 'axios'

import { useEffect } from 'react'
import { useState } from 'react'
import Todolist from './components/Todolist'

// type insitalstate={
//     id:number;
//     title:string;
//     status:boolean
// }

function InputForm() {
    const [todo,settodo]=useState([])
    const [text,settext]=useState("")

    const handletoggle=(id,e)=>{
        settodo(todo.map((elem)=>elem.id===id?{...elem,status:elem.status}:elem))
        // console.log("toogle",todo)
    }
    const handledeleted=(id,e)=>{
        settodo(
            todo.filter((elem) => elem.id !== id));
            
    }
    const handleadd=(e)=>{
        if(e.code==="Enter"){
            console.log(e.code)
            const payload = {status: false, id: Math.random(), title: text };
            axios.post("http://localhost:8000/todos",payload)
            .then((res)=>{
                console.log("chand",res.data)
                getdata()
            })
            .catch((err)=>console.log(err))
        }
    }
    useEffect(()=>{
        getdata()
    },[])
    const getdata=()=>{
        axios.get("http://localhost:8000/todos")
        .then(({data})=>{settodo(data)})
    }

  return (
    <div>
        <h1>Input_Form</h1>
        <input onKeyUp={(e)=>handleadd(e)} type="text" placeholder='User Enter Anythings' className='inputfrom' 
        onChange={(e)=>settext(e.target.value)}  />
        <div>
            {todo.map((elem)=>(
                <Todolist key={elem.id} {...elem} handletoggle={handletoggle} handledeleted={handledeleted}/>
            ))}
        </div>
        <p>Total items in todos:{todo.length}</p>
    </div>

  )
}

export default InputForm