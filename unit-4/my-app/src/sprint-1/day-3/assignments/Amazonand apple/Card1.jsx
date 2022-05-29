import styles from "./Card1.module.css"


const Card1=(props)=>{
    console.log(props)

    const {date,logourl,study,name,disc,title,arrurl,background}=props

    return (
        <>
        <div className={styles.conatainer} style={{backgroundColor:`${background}`}}>
            <div className={styles.leftdiv}>
            <div className={styles.conatainerdiv}>{date}</div>
            <div className={styles.conatainerdiv1}>{study}</div>
            <div className={styles.conatainerdiv2}>{name}</div>
            <div className={styles.conatainerdiv3}>{disc}</div>
            <div className={styles.conatainerdiv4}>{title}</div>
            </div>
            <div className={styles.rightdiv} >
            <div className={styles.conatainerdiv5}>
                <img style={{width:"60px"}} src={logourl} alt="amazon" />
            </div>
            <div className={styles.conatainerdiv6}>
            {/* <i class="fa-solid fa-square-right"></i> */}
                <img className={styles.Img} style={{width:"60px"}} src={arrurl} alt="array" />
            </div>
            </div>
            
        </div> 
        </>
        
    )
}

export default Card1

