
import {useState,useEffect} from "react"

function useTimeout(deley:number) {
    const [ready,setready]=useState(false)

    useEffect(()=>{
        let id = setTimeout(()=>{
            setready(true)
        },deley)

        return ()=> clearTimeout(id)
    },[])
    return ready
}

export default useTimeout