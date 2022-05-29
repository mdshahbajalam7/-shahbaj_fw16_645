import { useState } from "react"
import Styles from "./Employe.module.css"
// import Employee_details from "./db.json"

const Employeeform=()=>{
    const [formData,setformData]=useState({
        // ShowPassword:false
})


    const handleChange=(e)=>{
        // console.log(e);
        const inputName = e.target.name
        setformData({
            ...formData,
            [inputName] :e.target.value
        });
    }
    const handleSubmit=(e)=>{
        // e.preventDefault()
        console.log(formData)
        EmployesSubmit(formData)
    };
    const EmployesSubmit = async(formData)=>{
        try {
            let res = await fetch("http://localhost:3000/Employee_details",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(formData)
            }) 
            let data = await res.json()
            console.log(data)
         //    handleSubmit(data)
        } catch (error) {
            console.log(error);
            
        }

     }

    return(
        <>
        {/* <h1> MY FORM</h1> */}
        <div className={Styles.maindiv}>
       <form onSubmit={handleSubmit}>
        {/* <div> */}
           <div className={Styles.grid}>
               <label>User_Name</label>
               <input type="text" name="name" onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
               <label>Age</label>
               <input type="Number" name="Age" onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
               <label>Address</label>
              <textarea name="Address" placeholder="Enter_Address_Here" className={Styles.address} cols="30" rows="10" onChange={handleChange}/>
           </div>
           <div className={Styles.grid}>
              <label>Department</label>
              <select name="Department"onChange={handleChange} className={Styles.select}>
                <option >Department</option>
                  <option className={Styles.dept} >Marketing</option>
                  <option className={Styles.dept} >Equipment</option>
                  <option className={Styles.dept} >Accounting</option>
                  <option className={Styles.dept} >Book</option>
              </select>
           </div>
           <div className={Styles.grid}>
               <label htmlFor="">Salary</label>
               <input type="Number" name="Salary" onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
               <label htmlFor="">marital state</label>
               <input type="checkbox" className={Styles.check} name="marital_state" id="" onChange={handleChange} />
           </div>
           <div className={Styles.grid}>
           <input className={Styles.sub} type="submit" value="Submit"/>
           </div>
             

        {/* </div> */}
       </form>
       </div>
       </>
     
    )
} 

export default Employeeform