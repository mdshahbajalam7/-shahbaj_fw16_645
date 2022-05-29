import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { CartContext } from '../context/CartProvider'
import {Border} from "./Border.Styled"

function NavbarCartItem() {
  const [theme]=useContext(ThemeContext)
  const {value}=useContext(CartContext)
  return (
    <Border color={theme} >NavbarCartItem:{value}
    value</Border>
  )
}

export default NavbarCartItem