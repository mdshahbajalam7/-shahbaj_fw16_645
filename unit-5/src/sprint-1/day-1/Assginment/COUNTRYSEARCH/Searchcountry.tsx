import { useDebouncedCallback } from '@react-hookz/web'
import React, { useState } from 'react'
import { useFetch } from './useFetch'
import "./Search.css"

const url = ("http://localhost:3000/country")


type allCountry={
    country: string,
    city: string
}

function Searchcountry() {
    const [countryname,setcountryname]=useState("")

    const {loading,error,countrydata}=useFetch<allCountry>(url,{
        per_page: 1,
        q: countryname || "india",
    })


    const onchangeDebounced = useDebouncedCallback((e)=>setcountryname(e.target.value),[],1000,0)
  return (
      <>
      <div className='serach'>
      <h1>Search County</h1>
    
        
        <input type="text" placeholder='Search_country' onChange={onchangeDebounced} />

        {loading?(
            <div>Loading....</div>
        ):error?(
            <div>Something is wrong...</div>
        ): countrydata.map((elem)=>(
            <div className='country' key={elem.city}>{elem.country} {elem.city}</div>
        ))}
    </div>
    </>
  )
}

export default Searchcountry