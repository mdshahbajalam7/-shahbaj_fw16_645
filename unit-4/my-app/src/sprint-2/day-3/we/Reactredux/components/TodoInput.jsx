import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Addtodo } from '../action'

function TodoInput() {
    const [name,setname]=React.useState()
    const dispatch = useDispatch()

  // useEffect
    // useEffect(()=>{
    //   const getdata= async()=>{
    //     let res =  await fetch("http://localhost:8000/todos",{
    //       method:"POSt",
    //       headers:{"content-type":"application/json"},
    //       body:JSON.stringify(name)
    //     });
    //     let data = await res.json()
    //     setname(data)
      // }  jhjahsdjfhahsdjfhasdhfjhasdh
    //   getdata()
    // },[])

    const heandleadd=()=>{
      console.log(name)
      const Name={
        name

      }
      Addtodo(dispatch,Name)
      
    }
    // Addtodo(dispatch,payload)

  return (
    <div>TodoInput
        <h3>Add_Todo</h3>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  placeholder=' add something'/>
        <button onClick={heandleadd}>ADD</button>
    </div>
  )
} 

export default TodoInput
