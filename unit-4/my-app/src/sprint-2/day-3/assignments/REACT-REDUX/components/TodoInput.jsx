import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Addtodo } from '../action'

function TodoInput() {
    const [name,setname]=React.useState()
    const dispatch = useDispatch()
    // useEffect(()=>{
    //   const getdata= async()=>{
    //     let res =  await fetch("http://localhost:8000/todos",{
    //       method:"POSt"
    //       headers:{"content-type":"application/json"},
    //       body:JSON.stringify(name)
    //     });
    //     let data = await res.json()
    //     setname(data)
    //   }
      // getdata()
    // },[])

    const heandleadd=(e)=>{
      console.log(name)
      const payload={
        name

      }
      Addtodo(dispatch,payload)
      
    }
    // Addtodo(dispatch,payload)

  return (
    <div>
        <h3>Add_Todo</h3>
       <div>
       <input style={{width:"25%",height:"35px"}} 
       type="text" name='name' onChange={(e)=>setname(e.target.value)} 
        placeholder=' add something'/>
        <button style={{width:"15%",height:"50px",
        marginLeft:"10px",backgroundColor:"black",
        color:"white",fontSize:"25px",borderRadius:"5px",
        border:"none"}} onClick={heandleadd}
        >ADD_Todo
        </button>
       </div>
    </div>
  )
}

export default TodoInput