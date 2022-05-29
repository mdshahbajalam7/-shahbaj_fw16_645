import React, { useEffect, useState } from "react"
import Employeeform from "./Employeeform"
import Styles from "./Employe.module.css"
// import Employee_details from "./db.json"


const Employee_details=()=>{
    const [contacts,setcontacts]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/Employee_details")
        .then(res=>res.json())
        .then(data=>{
            setcontacts(data)
        })
        
    },[])



    return (
        <>
        <h1>EMPLOYEE_DETAILS</h1>
        <div className={Styles.maindiv1}>
            <Employeeform/>
        </div>
         <div className={Styles.conatiner}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>marital_state</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((elem)=>{ 
                        return (
                            <>
                            <tr>
                                <td>{elem.name}</td>
                                <td>{elem.Age}</td>
                                <td>{elem.Department}</td>
                                <td>{elem.Salary}</td>
                                <td>{elem.Address}</td>
                                <td>{elem.marital_state ? "Married":"UnMarried"}</td>
                            </tr>
                            </>
                        )

                    })}
                </tbody>

            </table>
        </div> 
        </>
    )
}
export default Employee_details