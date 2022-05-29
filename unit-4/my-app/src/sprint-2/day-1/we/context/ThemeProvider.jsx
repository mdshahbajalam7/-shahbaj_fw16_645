import React, {createContext, useState} from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme,settheme]=useState("White")
    const toggleTheme = ()=>{
        settheme(theme==="white"?"black":"white")
    };
    return (
        <ThemeContext.Provider value={[theme,toggleTheme]}>
        {children}
        </ThemeContext.Provider>
    )
}