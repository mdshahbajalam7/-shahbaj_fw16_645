import React from 'react'
import  "./button.css"

function Button({onClick,varient,colorScheme, children}) {
  return (
    <button onClick={onClick} className={`btn ${colorScheme || "red"} ${varient || "ghost"}`}>{children}</button>
  )
}

export default Button