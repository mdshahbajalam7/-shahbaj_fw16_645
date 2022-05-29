
import axios from 'axios';
import { useEffect, useState } from 'react'

type paramsType={
    q:string;
    per_page:number
}

export const useFetch=<T>(url:string,params:paramsType)=>{
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState(false)
    const [data,setdata]=useState<T[]>([])

    useEffect(()=>{
        setloading(true)
        axios.get(url,{
            params:{
                 ...params
            }
        }).then(({data})=>{
            setloading(false)
            setdata(data.items)
            console.log(data)
        }).catch(()=>{
            setloading(false)
            seterror(true)
        })

    },[params?.q])



    return {error,loading,data}
}

