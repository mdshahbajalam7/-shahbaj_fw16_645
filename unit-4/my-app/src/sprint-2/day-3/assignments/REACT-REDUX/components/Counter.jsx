import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrementCounter,incrementCounter } from '../action'
// import { store } from './store'
// import action from ""
function Counter() {
    const count = useSelector((state)=> state.count)
    const dispatch=useDispatch();
    const add=(value)=>{
      let action = incrementCounter(value+1)
      console.log("Counter",action);
      dispatch(action)
    }
  return (
    <div >
      <h1>Counter:{count}</h1>
    <div>
    <button onClick={()=>add}>Increment</button>
    <button onClick={()=>dispatch(decrementCounter(1))}>Decrement</button>
    </div>
    <div>
    <button onClick={()=>dispatch(incrementCounter(5))}>Increment by 5</button>
    <button onClick={()=>dispatch(decrementCounter(20))}>Decrement by 20</button>
    </div>
    </div>
  )
}

export default Counter
