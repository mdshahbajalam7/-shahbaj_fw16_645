import React, { useEffect, useState } from 'react'

function useTimeout(delay:number) {
    const [isshow,setisshow]=useState(false)
    
        useEffect(()=>{
             let id= setTimeout(()=>{
                setisshow(true)
            },delay)
    
            return ()=>clearTimeout(id)
        },[])
        return isshow
}

export default useTimeout