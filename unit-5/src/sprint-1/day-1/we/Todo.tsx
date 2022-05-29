// import { type } from 'os'
import  { useCallback, useState } from 'react'
import {MemoTodoItem} from './TodoList'

export type Todotype={
    id:number,
    title:string,
    status:boolean
}
function Todo() {
    const [text,settext]=useState("")
    const [list,setlist]=useState<Todotype[]>([])


    const handletoggle=(id:number)=>{
        setlist(list.map(l=>l.id===id?{...l,status: !l.status}:l ))

    }

    // const callback = useCallback(handletoggle,[id,list])

  return (
    <div>
        <input type="text" onChange={(e)=>settext(e.target.value)} />
        <button onClick={()=>{
            const payload : Todotype={
                id:Math.random(),
                title:text,
                status:true
            };
            setlist([...list,payload])
        }}>Add_todo</button>
        {list.map((elem)=>(
            <MemoTodoItem key={elem.id} {...elem} handletoggle={handletoggle}/>
        ))}

    </div>
  )
}

export default Todo