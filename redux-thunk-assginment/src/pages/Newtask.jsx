import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from "../pages/Login.module.css"  

function Newtask() {
    const dispatch = useDispatch()
    const [formdata,setformdata]=useState()
    const handlechange=(e)=>{
        const inputName = e.target.name
        if(e.target.type==="checkbox"){
            setformdata({
                ...formdata,
                [inputName]:e.target.checked
            })

        }
        else if(e.target.type==="radio"){
            setformdata({
                ...formdata,
                [inputName]:e.target.checked
            })

        }else{
            setformdata({
                ...formdata,
                [inputName]:e.target.value
            })
        }

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        setformdata(formdata)
        dispatch(formdata)
        console.log(formdata)

    }
  return (    
      <form onSubmit={handlesubmit}>
    <div className={styles.homediv}>      
    <div className={styles.maindiv} >
        <div>
            <label htmlFor="">New Task</label>
            <input type="text" name='task' onChange={handlechange} />
        </div>
        <div>
            <label htmlFor="">Discription</label>
            <input type="text" name='discription' onChange={handlechange} />
        </div>
        <div> Task Status
        <div>
            <input type="Radio" name='Todo' onChange={handlechange} />
            <span>Todo</span>
        </div>
        <div>
           <input type="Radio" name='In Progress' onChange={handlechange}/>
            <span>In Progress</span>
        </div>
        <div>
            <input type="Radio" name='Done' onChange={handlechange} />
            <span>Done</span>
        </div>
    </div>
        <div>Tag
       <div>
       <input type="checkbox" name='Personal'  onChange={handlechange} />
        <span >Personal</span>
       </div>
       <div>
       <input type="checkbox"  name='Official' onChange={handlechange} />
        <span >Official</span>
       </div>
       <div>
       <input type="checkbox" name='Others'onChange={handlechange} />
        <span >Others</span>
       </div>
    </div>
    </div>
    <div className={styles.maindiv}>
        <input type="text" name="" placeholder='Add New Sub Task' onChange={handlechange}/>
        <br />
        <input type="submit" value="Add_TASK" />
    </div>
    <div className={styles.maindiv}>
        <input type="date" name="date" onChange={handlechange} />
        <br />
        <input type="submit" name="add" value="CREATE A NEW TASK" />
        
    </div>
    </div>
    </form>
  )
}

export default Newtask