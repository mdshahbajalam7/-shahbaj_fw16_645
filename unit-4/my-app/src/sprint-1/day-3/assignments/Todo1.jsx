import { useState } from "react"

const stylingtodo={
    background:"blue",
    font:"20px",
    size:"20px"
    
}
const inner={
    width:"400px",
    margin:"50px auto 0 auto ",
    border:"red",
    border:"solid",
    // border:"5px"
    background:"yellow",
    padding:"10px",
    

}


const Todo1 = ()=>{

    const [task,setTask]=useState("")
    const [Todo,setTodo]=useState([])
    const handleChange =(e)=>{
        // console.log("chnaging input",e.target.value)
        setTask(e.target.value)
        
    }

    const  handleClick=()=>{
        setTodo([...Todo,task])

    }
    // console.log(Todo,"Todo")    
    return (
        <>
        <div id="inner" style={inner}>
            <h1 >Todo List</h1>
            {Todo.map((item)=>{
                return <h1 style={stylingtodo}>{item}</h1>
            })}
        <input style={{height:"33px",border:"none",width:"200px"}} type={"text"} value={task} placeholder="Write Something" onChange={handleChange}/>
        <button style={{width:"70px",height:"35px",border:"none"}} onClick={handleClick}>Add Todo</button>
        </div>
      
        </>
    )

}

export default Todo1