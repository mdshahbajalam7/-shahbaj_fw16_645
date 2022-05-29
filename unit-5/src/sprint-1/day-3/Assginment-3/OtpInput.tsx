import { useRef, useState } from "react"
import "./input.css"

type otpInputType={
    totalinputs:number;
    onChange:(otp:string)=>void;
}

function OtpInput({totalinputs,onChange}:otpInputType) {
    const [otp,setotp]=useState<string>("")
    const InputRef = useRef<HTMLInputElement[]>([]);
    // console.log("Inputref",InputRef)
  return (
    <div>
        <h1>Enter Your OTP</h1>
        {new Array(totalinputs).fill(1).map((elem,index)=>(
            <input 
            onChange={(e)=>{
                setotp(otp+e.target.value)

            }}
            onPaste={()=>{

            }}
            onKeyUp={(e)=>{
                // console.log(e.code);
                if(e.code==="Backspace"){
                    InputRef.current[index-1]?.focus()
                    InputRef.current[index-1]?.select()
                }else{
                    InputRef.current[index+1]?.focus()
                }
                onChange(otp)
            }} 
            ref={(element)=>{
                // console.log("element",element)
                if(InputRef.current && element){
                    InputRef.current[index]=element
                }
            }}

             type={"text"} maxLength={1}
             className="input" 
             key={index} />
        ))}
    </div>
  )
}

export default OtpInput