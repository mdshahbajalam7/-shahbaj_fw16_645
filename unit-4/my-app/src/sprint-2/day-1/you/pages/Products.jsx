import React from 'react'
import { Link, Outlet } from "react-router-dom"

let data = [
    {
        id:1,
        name:"mouse",
        image:"https://support.content.office.net/en-us/media/e8384959-ad1a-1b95-762b-2861496b886e.png"
    },
    {
        id:2,
        name:"keyboard",
        image:"https://support.content.office.net/en-us/media/e8384959-ad1a-1b95-762b-2861496b886e.png"
    },
    {
        id:3,
        name:"Moniter",
        image:"https://support.content.office.net/en-us/media/e8384959-ad1a-1b95-762b-2861496b886e.png"
    },
    {
        id:4,
        name:"cpu",
        image:"https://5.imimg.com/data5/BE/JW/MY-14914674/dell-desktop-cpu-500x500.jpg"
    }

]

function Products() {
  return (
    <div>Products:
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            <div>
                {data.map((elem)=>(
                    <div key={elem.id} style={{margin:"10px",padding:"10px"}}>
                        <Link to={`/products/${elem.id}`}>{elem.name}</Link>
                    </div>
                ))}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Products