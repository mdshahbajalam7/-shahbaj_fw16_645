
import { useRef, useState } from "react"
import "./otp.css"

type OtpInputType={
    totalInputs:number
    onChange:(opt:string)=>void
}

function OtpInput({totalInputs,onChange}:OtpInputType) {
  const [otp,setotp]=useState<string>(" ")

  const inputRef = useRef<HTMLInputElement[]>([]); //{current : []}
  console.log("ref look link ",inputRef);
  
  return (
    <div className="otp">
      <h1>OtpInput_box</h1>
       {new Array(totalInputs).fill(1).map((ele,index)=>(
         <input 
         onChange={(e)=>{
           setotp(otp+e.target.value)

         }}
         onPaste={()=>{

         }}
         onKeyUp={(e)=>{ 
          //  if check backspace
           console.log(e.code);
           if(e.code === "Backspace"){
            inputRef.current[index-1]?.focus()
            inputRef.current[index-1]?.select()

           }else{
            inputRef.current[index+1]?.focus()
           }
           onChange(otp);
         }}
         ref={(element)=>{
           console.log("element",element);
           
           if(inputRef.current && element){
            inputRef.current[index]=element
           }
         }}
         type={"text"} maxLength={1} 
         className="otpinput"
          key={index} />
       ))}
    </div>
  )
}

export default OtpInput