// import  axios  from 'axios';
import axios from 'axios';
import { type } from 'os';
import { useEffect, useState } from "react"

type paramsType={
    q:string,
    per_page:number
}

export const useFetch=<T>(url:string,params?:paramsType)=>{
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState(false)
    const [countrydata,setcountrydata]=useState<T[]>([])


    useEffect(()=>{
        setloading(true)
        axios.get(url,{
            params:{
                ...params
            }
        }).then(({data})=>{
            setloading(false)
            setcountrydata(data)
            console.log(countrydata)
        }).catch(()=>{
            setloading(false)
            seterror(true)
        })
    },[params?.q])

    return {loading,error,countrydata}
}