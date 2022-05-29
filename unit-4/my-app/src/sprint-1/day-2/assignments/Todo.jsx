import { useState } from "react";

const stylingtodo={
    background:"teal",
    font:"20px",
    size:"20px"
    
}
const inner={
    width:"400px",
    margin:"50px auto 0 auto ",
    border:"red",
    border:"solid",
    // border:"5px"
    background:"orange",
    padding:"10px",
    

}

const Todo = ()=>{

    const [task,setTask]=useState("")
    const [todo,setTodo]=useState([])

    const handleChange=(e)=>{
        // console.log("chnaging input",e.target.value)
        setTask(e.target.value)
    }

    const handleClick=()=>{
        setTodo([...todo,task])

    }
    // console.log(todo,"todo")

    return (
        <>
        <div id="inner" style={inner}>
        <h1>Todo List</h1>
        {todo.map((item)=>{
            return <h1 style={stylingtodo} >{item}</h1>
        })}
        <input style={{height:"32px",border:"none",width:"200px"}} type={"text"} value={task} placeholder="Write Something" onChange={handleChange}/>
        <button style={{width:"50px",height:"35px",border:"none"}} onClick={handleClick}>Add </button>
        </div>
        
        </>
    )
}

export default Todo
