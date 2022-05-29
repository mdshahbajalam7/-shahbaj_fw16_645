// import React from 'react'


import axios from "axios"
// import { Console, error } from "
import { useEffect, useState } from "react"
import "./from.css"

type Laptopcompany={
    id:number,
    model:string,
    make_year:number,
    operating_system:string,
    screen_height:number,
    screen_width:number,
    price:number
}

function Form() {
   const [fromdata,setfromdata]=useState({})
    const [allData,setallData]=useState<Laptopcompany[]>([])
    const [data,setdata]=useState<Laptopcompany[]>([])

    const handlechange=(e:{target:any;})=>{
        const inputName=e.target.name
        setfromdata({
            ...fromdata,
            [inputName]:e.target.value
        })
    }

    const handlesubmit=(e :React.SyntheticEvent)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/laptopdata",fromdata)
        .then(getdata)
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        getdata()
    },[])

    const getdata =()=>{
        axios("http://localhost:8000/laptopdata")
        .then(res=>{
            console.log(res.data)
            setallData(res.data)
        })
        .catch(e=>console.log(e))
    }

    const shortbyprice =()=>{
        const updatedata = allData.sort((a,b)=>+(a.price)-+(b.price))
        setallData(updatedata)
        // console.log("hello")
        console.log(updatedata)
    }
    const shortbyear=()=>{
        const updatedata=allData.sort((a,b)=>+(a.make_year)-+(b.make_year))
        setallData(updatedata)
        console.log(updatedata)
    }
  return (
      <>
    <div className="formdiv" >
        <h3>Product</h3>
        <form  onSubmit={handlesubmit}>
            <div className="inner">
            <input type="text" name="id"  placeholder="Enter id" onChange={handlechange} />
            <br />
            <input type="text" name="model"  placeholder="Enter model" onChange={handlechange}/>
            <br />
            <input  name="make_year" type="year" placeholder="Enter make_Year" onChange={handlechange}/>
            <br />
            <input type="text" name="operating_system"  placeholder="Enter_operting_system" onChange={handlechange} />
            <br />
            <input type="number" name="screen_height"  placeholder="Screen_hight" onChange={handlechange} />
            <br />
            <input type="number" name="screen_width"  placeholder="Screen_width" onChange={handlechange} />
            <br />
            <input type="number" name="price"  placeholder="Enter Price" onChange={handlechange} />
            <br />
            <input className="btn" type="submit"  />
            </div>
        </form>
    </div>
    <button className="button" onClick={shortbyprice}>Short by price</button>  
    <button className="button" onClick={shortbyear}>Short by Year</button>
    <div className="table">
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Model</td>
                    <td>make_year</td>
                    <td>Operating system</td>
                    <td>screen_height</td>
                    <td>Screen width</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
            {allData.map((elem)=>(
             <tr key={elem.id}>
            <td>{elem.id}</td>
            <td>{elem.model}</td>
            <td>{elem.make_year}</td>
            <td>{elem.operating_system}</td>
            <td>{elem.screen_height}</td>
            <td>{elem.screen_width}</td>
            <td>{elem.price}</td>
        </tr>
          ))}
            </tbody>
        </table>
    </div>
    </>

  )
}

export default Form