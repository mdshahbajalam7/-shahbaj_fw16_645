import { useState } from "react"
import Styles from "./Form.module.css"


const Form=()=>{
    const [formData,setformData]=useState({
        ShowPassword:false
    })

    const handleChange=(e)=>{
        // console.log(e);
        const inputName = e.target.name
        // const {name}=e.target
        if(e.target.type==="checkbox"){
            console.log(e.target.value,e.target.checked)
            setformData({
                ...formData,
                [inputName] :e.target.checked
            });
        }else if(e.target.type==="file"){
            setformData({
                ...formData,
                [inputName] :e.target.files
            });
        }else{
            setformData({
                ...formData,
                [inputName] :e.target.value
            });
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    };

    return(
        <>
        <h1> MY FORM</h1>
        <div className={Styles.maindiv}>
       <form onSubmit={handleSubmit}>
        {/* <div> */}
           <div className={Styles.grid}>
               <label>User_Name</label>
               <input type="text" name="name" onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
               <label>password</label>
               <input type={formData.ShowPassword ? "text": "password"} name="password" onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
               <input className={Styles.CHECK} type="checkbox" name="ShowPassword" id="" onChange={handleChange} />
               <label>Showpassword</label>
           </div>
           <div className={Styles.grid}>
               <label>Age</label>
               <input type="Number" name="Age" onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
               <label>DOB</label>
               <input type="date" name="date"  onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
               <label htmlFor="">Resume</label>
               <input type="file" name="files" onChange={handleChange}/>
           </div>
           
             <input className={Styles.sub} onSubmit={handleSubmit} type="submit" name="photo" onChange={handleChange}/>

        {/* </div> */}
       </form>
       </div>
       </>
     
    )
} 

export default Form