import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { completedtodo } from '../../REACT-REDUX/action';
import { deleteTodo } from '../Redux/action'
// import { deleteTodo } from '../../REDUX - COMBINE REDUCERS/'
// import { deletetodo } from '../Redux/action'


function DisplayPage() {
  const {id} = useParams();
  // console.log(id)
  const todos = useSelector((state)=>state.app.todos)
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate=useNavigate();
  // const [update,setupdate] = useState(false)

  const from = location?.state?.from?.pathname || "/"


  // useEffect(()=>{
  // // setupdate(updatedata)
  // if(todos.length<=0){
  //   setupdate(true)
  // }
  // },[update])



  let list = todos.filter((item)=>item.id==id)
    
    const handledelete=()=>{
      let payload =  todos.filter((item)=>item.id != id)
      dispatch(deleteTodo(payload))
      navigate(from, {replace:true})
    }



    const handlecompleted=()=>{
      console.log("hello")
      const payload =todos.sort((item)=>item.id != id)
      dispatch(completedtodo(payload))


    }
  
    
    // // console.log(todos[0])
    // console.log(todos)

  return (
    <div> 
      <h1 style={{padding:"10px",border:"1px solid red",marginTop:"0px",backgroundColor:"green",color:"white",}}> Todos_Details</h1>
      <h2 style={{border:"1px solid black",width:"40%",margin:"auto",backgroundColor:"aqua",}}>{list[0].title}</h2>
        <div style={{marginTop:"20px"}}>
        <button onClick={()=>handlecompleted()} style={{marginLeft:"50px",width:"17%",border:"1px solid red",
        height:"40px" ,backgroundColor:"black",
        color:"wheat",borderRadius:"5px"}}
        >Completed</button>
        <button onClick={()=>handledelete()} style={{marginLeft:"88px",
        width:"17%",border:"1px solid red",
        height:"40px",backgroundColor:"black",
        color:"wheat",borderRadius:"5px"}}
        >Deleted</button>
        </div>
    </div>
  )
}

export default DisplayPage