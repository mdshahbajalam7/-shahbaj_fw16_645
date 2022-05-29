import React, { createContext, useState } from "react";

 export const AuthContext = createContext()


export const  AuthProvider = ({children})=>{
    const [isAuth ,setisAuth]=useState(false)

    const login=()=>{
        setisAuth(true)
        // console.log("hello");
    }
    const logout = ()=>{
        setisAuth(false)
    }
    return(
        <AuthContext.Provider value={{isAuth ,login,logout}}>{children}</AuthContext.Provider>
    )

}