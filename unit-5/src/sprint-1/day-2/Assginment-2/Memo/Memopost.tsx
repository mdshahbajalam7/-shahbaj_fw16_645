import  { memo } from 'react'


type verifyType={
    hendleVerify:(s:number)=>void 
}

export const Memopost=({ title, body, verify,hendleVerify,id }: any & verifyType)=>{
    console.log("re")

    const handleveryfy=()=>{
        console.log(id)
        hendleVerify(id)

    }

    return(
        <div style={{border:"solid", marginTop:"20px",padding:"5px"}}>
            <div>
                    <div style={{border:"1px solid",width:"20%",margin:"auto",fontSize:"20px"}}>
                    <div style={{backgroundColor: verify ? "rgb(6,876,099)" : "teal"}}>
                        <h3>{title}</h3>
                        <h3>{body}</h3>
                        <h3>{verify? "verified":" Not verified"}</h3>
                        </div>
                    </div>
                    <button style={{
                        marginLeft:"450px",
                        fontSize:"18px",
                        padding:"5px 20px",
                        backgroundColor:"black",
                        color:"wheat"

                    }} onClick={handleveryfy}>Verify</button>
            </div>
        </div>
    )
    
}
export const Memoverify = memo(Memopost)