
import axios from 'axios';
import { useState, useEffect } from 'react';

type paramType={
    q:string
    per_page:number
}


export const useFetch=<T>(url:string, params?:paramType)=>{
    const [isloading,setisloading]=useState(false)
    const [iserror,setiserror]=useState(false)
    const [data,setdata]=useState<T[]>([])


    useEffect(()=>{
        setisloading(true)
        axios.get(url,{
            params:{
                 ...params
            }
        }).then(({data})=>{
            setisloading(false)
            setdata(data.items)
            console.log(data)
        }).catch(()=>{
            setisloading(false)
            setiserror(true)
        })

    },[params?.q])


    return {isloading,iserror,data}
}