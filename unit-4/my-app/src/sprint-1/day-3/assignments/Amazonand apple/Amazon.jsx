
import Card1 from "./Card1"


const data = {
    date:"28/10/2020",
    logourl: "https://www.amanida.com/wp-content/uploads/2018/04/amazon-logo-a-smile-black.png",
    study:"Case Study",
    name:"Amazon Gift",
    background:"orange",
    disc:"pay",
    title:"Dastop-Mobile",
    arrurl:"https://seeklogo.com/images/R/right-arrow-direction-logo-60E322F7F2-seeklogo.com.png"
    
}
const Apple = {
    date:"17 Sept 2017",
    logourl: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    study:"Case Study",
    name:"Apple Gift",
    background:"#e4e4e4",     
    disc:"Payment",
    title:"MacOS-Mobile",
    arrurl:"https://seeklogo.com/images/R/right-arrow-direction-logo-60E322F7F2-seeklogo.com.png"
    
}

function Amazon(){
    return (
        <>
        <Card1 {...data}/>
        <Card1 {...Apple}/>
        </>
    )
}


export default Amazon