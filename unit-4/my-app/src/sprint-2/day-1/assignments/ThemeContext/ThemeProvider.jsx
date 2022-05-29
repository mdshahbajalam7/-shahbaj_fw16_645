import React, { createContext, useState } from 'react'



export const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [Theme,setTheme]=useState("white")

  const  Themetoggle=()=>{
    setTheme(Theme==="white"?"black":"white")
  }
  return (
    <ThemeContext.Provider value={[Theme,Themetoggle]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider