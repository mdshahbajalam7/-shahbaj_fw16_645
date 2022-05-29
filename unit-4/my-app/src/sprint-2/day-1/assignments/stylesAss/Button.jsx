import React, { useState } from "react";
import styled from "styled-components"

const Buttonstyle =styled.button`
font-size: large;
padding: 10px;
margin-top:10px;
width:20%;
color:white;
border: 2px solid black;
background-color ${(props)=>(props.iscolor?"red":"green")}`

export  const  Button =()=>{
    // const [color, setcolor]=useState()
    const [iscolor,setiscolor]=useState()
    // const Formwrapper = styled.form`
    // background-color: ${(props)=>(props.color)}`;
    return(
        <>
        <div>
            <Buttonstyle iscolor={iscolor} onClick={()=>setiscolor(!iscolor)} >Styled_Button</Buttonstyle>
            {/* <Formwrapper color={color}>
                <div>
                    <input  placeholder="username" value={color} type="text" onChange={(e)=>setcolor(e.target.value)} />
                    {/* <input type="text" name="" id="" /> */}
                {/* </div> */}
            {/* </Formwrapper> */}
        </div>
        </>
    )
}