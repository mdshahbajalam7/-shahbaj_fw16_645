import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Categories() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>
            <button onClick={()=>navigate("/categories/Mens")}>Mens</button>
            <button onClick={()=>navigate("/categories/Womens")}>Womens</button>
            <button onClick={()=>navigate("/categories/Unisex")}>Unisex</button>
            <div>
                <Outlet/>
            </div>
        </h1>
    </div>
  )
}

export default Categories