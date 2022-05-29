import axios from "axios";
import { useEffect, useState } from "react";
import { Datatype } from "./Body";

function CardDetails(props:any) {

  const  [Data,setData]=useState([])

  // HINT: you can fetch multiple IDs from json-server like this:
  // localhost:8080/products?id=1&id=4&id=6
  // this will fetch products with id 1, 4 and 6.

  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((err)=>console.log(err))
  },[])
 
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle"></h4>
      </span>
      <img className="detailsImage" src="https://rukminim1.flixcart.com/image/416/416/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70" alt="" />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">{props.Price}Price: $</span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
      </div>
    </div>
  );
}
export { CardDetails };
