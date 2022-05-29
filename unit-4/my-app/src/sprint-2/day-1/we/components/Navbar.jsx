import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeProvider"
import NavbarCartItem from "./NavbarCartItem"
import {Border} from "./Border.Styled"



function Navbar() {
   const [theme,toggleTheme]=useContext(ThemeContext) 
  return (
    <Border color={theme}>
        Navbar:
        <div>{theme}: <button onClick={toggleTheme}>Toggle Theme</button></div>
        <div>
        <NavbarCartItem/>
        </div>
        

    </Border>
  )
}

export default Navbar