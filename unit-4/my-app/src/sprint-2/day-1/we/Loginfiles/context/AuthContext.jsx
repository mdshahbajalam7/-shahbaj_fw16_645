import React, { createContext, useState } from "react";

 export const AuthContext = createContext()


export const  AuthProvider = ({children})=>{
    const [isLoggIn ,setisLoggIn]=useState(false)

    const login=()=>{
        setisLoggIn(true)
        console.log("hello");
    }
    const logout = ()=>{
        setisLoggIn(false)
    }
    return(
        <AuthContext.Provider value={{isLoggIn ,login,logout}}>{children}</AuthContext.Provider>
    )

}