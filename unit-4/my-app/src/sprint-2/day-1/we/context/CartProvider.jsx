import React,{createContext, useState} from "react";




export const CartContext = createContext()
//  const CartConsumer=CartContext.Consumer
export const CartProvider=({children})=>{
    const [Value,setValue]=useState(0)

    const addItemtoCart=()=>{
        setValue(setValue+1)
    }
    return(
        <CartContext.Provider  value={{Value,setValue,addItemtoCart}}>
            {children}
            </CartContext.Provider>
    )
}
// CartContext.Provider
// CartContext.Consumer
