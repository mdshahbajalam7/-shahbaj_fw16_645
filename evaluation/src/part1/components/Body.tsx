import axios from "axios";
// import { type } from "os";
import { useEffect, useState } from "react";
import { Card } from "./Card";
// import { Card } from "./Card";
// import axios from "axios";
import "./item.css"

export type Datatype={
    id: number,
    product_name: string,
    rating: number,
    price: number,
    category: string,
    ItemAlreadyincart:  boolean
}

function Body() {
  const [data , setdata ]=useState<Datatype[]>([])


  const handlevarify = (id:number)=>{
    setdata(data.map((elem)=>(elem.id===id? {...elem,ItemAlreadyincart:!elem.ItemAlreadyincart}:elem)))

  }

  useEffect(()=>{
    // axios.get
    axios.get("http://localhost:3000/products")
    .then((res)=>{
      console.log(res.data)
      setdata(res.data)
    })
    .catch((err)=>console.log(err))
  },[])

  
  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
      {data.map((elem)=>(
        <Card key={elem.id} {...elem}/>
      ))}
    </div>
  );
}

export { Body };
