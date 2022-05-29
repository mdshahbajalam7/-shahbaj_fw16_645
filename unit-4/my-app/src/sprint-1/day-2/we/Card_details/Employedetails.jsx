import Card from "./Card"

const data = {
    Name: "Md Shahbaj Alam",
    qulification:"B-Tech",
    organisation:"Masai School",
    Gender:"Male",
    ImgURL: "https://ca.slack-edge.com/T02QFJUB5DF-U02R8TPTW21-7ede83ef692e-512" 

}


function Employedetails (){
    return (
        <>
        <Card {...data}/>
        </>
    )
}

export default Employedetails