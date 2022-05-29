import { useState } from "react"
import TodoItem from "./TodoItem"
import {nanoid} from "nanoid"



const TodoList=()=>{
    const [task, setTask]=useState("")
    const [todo,setTodo]=useState([])
    const [isloggedIn,setloggedIn]=useState(false)
    const [isloading,setloading]=useState(false)



    const handleChange=(e)=>{
        // console.log(e)
        setTask(e.target.value)
    };

    const handleClick=()=>{
        // ["task1","task2","task"]
        const taskObj={
            title:task,
            status:false,
            id:nanoid(),
            
        }
        setTodo([taskObj,...todo])
    };

    const handleDelete = (id)=>{
        console.log(id)
        let newTodo = todo.filter(item=>item.id  !=id)
        setTodo(newTodo)
    };
    // const handleToggle = (id)=>{
    // }
    const handleLogin=()=>{
        setloggedIn(true)
    }
    const handleLogout=()=>{
        setloggedIn(false)
    }
   


    return (

        <>
        {isloading && <h2>Loading.....</h2> }
        {isloggedIn ? <>
        {" "} 
        <button onClick={handleLogout}>Logout</button>
         <input type={"text"} placeholder="Enter Task" value={task} onChange={handleChange} />
         <button onClick={handleClick}>Add todo</button>
         { todo.length ? todo.map((item,index)=>{
            return <TodoItem key = {item.id} {...item} handleId = {handleDelete} isEven = {index%2 ==0 ?true:false}/>
          }): <h1>no todo exists</h1>
          } 
          </>:
          <h1>User Not Login <button onClick={handleLogin}>Login</button></h1>
        }
       
        </>
    )
}

export default TodoList;