import styles from "./Card.module.css"

const leftstyling = {
    color:"blue",
    padding:"2px"
}
const leftstyling1= {
    fontSize:"50px",
    color:"red"
}
function Card(props){
    // console.log(props)
    const {Name,organisation,qulification ,Gender,ImgURL}=props
    return (
        <div className={styles.card}>
            <div className={styles.left_content}>
                <img src={ImgURL}alt="Name"/>
            </div>
            <div className="right_content">
                <h1 style={{color:"green",fontSize:"30px"}}>{organisation}</h1>
                <h1 style={{...leftstyling,...leftstyling1}}>Name:{Name}</h1>
                <h2>Gender:{Gender}</h2>
                <h2>Qulification:{qulification}</h2>

            </div>
        </div>
    )

}


export default Card