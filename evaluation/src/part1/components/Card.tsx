
// import { type } from "os";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Datatype} from "./Body"
import "./item.css"

const handlevarify=(id:any)=>{
  console.log(id)
  handlevarify(id)
  
}

function Card( props:Datatype ) {
  const [carddata,setcarddata]=useState(0)


  const handleclick=()=>{
    setcarddata(carddata+1)
    console.log("hello");
    console.log(carddata);
    
    

  }
  return (
    <div className="item">
      <img src="https://rukminim1.flixcart.com/image/416/416/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70" className="productImage" />
      <span>
        <Link className="productLink" to={`/${props.id}`}>
          {/* ={`/${d.id}` */}
          {props.product_name}
        </Link>
      </span>
      <span className="productCategory">{props.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">{props.price}$</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings:{props.rating} </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      
      {/* <div className="itemInCart">{Add to cart?"Item Already in cart":"Add_to_cart"}</div>  */}
       {/* OR */}
      <button onClick={handlevarify} className="productAddtoCart">
        Add to cart
      </button>
      
     
    </div>
  );
}

export { Card };
