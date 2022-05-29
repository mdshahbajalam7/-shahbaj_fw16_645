// import { type } from 'os'
import  { memo } from 'react'
import { Todotype } from './Todo'

type Todoitemprops={
  handletoggle:(s:number)=>void
}

function TodoList(props:Todotype & Todoitemprops) {
    console.log("Rendering todoitme for",props.title)
  return (
      <>
    <div>{props.title} - {props.status?"Done":"Not done"}</div>
    <button onClick={()=>props.handletoggle(props.id)}>Toggle</button>
    </>
  )
}
// very carefully use
export const MemoTodoItem = memo(TodoList)
    
//     function eq(prev,curr){
  // console.log("prev",prev);
  // console.log("curr",curr);
  
//     if(prev.id===curr.id){
//         return true
//     }
//     return false
// })

export default TodoList