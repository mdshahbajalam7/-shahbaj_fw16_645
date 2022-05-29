import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider';
import {Border} from "./Border.Styled"


function Cart() {
    const {addItemtoCart}= useContext(CartContext)
    
    // console.log(addItemtoCart);
  return (
    <Border>Cart
        <button onClick={addItemtoCart} >Add To Cart</button>
    </Border>
  )
}

export default Cart


