import { useState } from 'react'
import { useFetch } from './useFetch'
import { useDebouncedCallback } from '@react-hookz/web'
const url=("https://api.github.com/search/users")

// const url = ("https://api.github.com/search/users")

type Github={
    id:number
    login:string
    avatar_url:string

}

function Githubusers() {
    const [text,settext]=useState("")

    const {data,error,loading}=useFetch<Github>(url,{
        per_page:5,
        q:text || "mdshahbajalam7"
        // users[]
    })


    const onchangeDebounced = useDebouncedCallback((e)=>settext(e.target.value),[],1000, 0) 

    return (
        <>
        <h1>Github Users</h1>
    <div>
    <input type="text"  placeholder='serch user' onChange={onchangeDebounced} />
        {/* <br /> */}
        {/* <button onClick={()=>{
            axios.get(url,{
                params:{
                    per_page:5,
                    q:text 
                }
            })
        }}>Serach</button> */}
        {loading ?(
            <div>loading....</div>
        ) : error ?(
            <div>something is wrong..</div>
        ) : data.map((elem)=>(
            <div key={elem.id}>{elem.login}
            <br />
            <img style={{width:"300px",height:"300px"}} src={elem.avatar_url} alt="" />
            <br />
            </div>
        ))}
    </div>
    </>
  )
}

export default Githubusers