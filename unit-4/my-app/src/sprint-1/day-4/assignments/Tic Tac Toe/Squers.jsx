import React from 'react'
import styles from "./Tic.module.css"
// import styles from "./Tic.module.css"

function Squers({clickArray,handleClick,}) {
  return (
    <div className={styles.board }>
        {clickArray.map((elem,index) =>{
            if(elem === ""){
                return (
                    <div
                     key={index} className={styles.Squers}
                     onClick={()=>handleClick(index)}
                     >
                       {elem}
                     </div>
                );
            }else{
                return (
                    <div
                     key={index} className={styles.Squers}
                     
                     >
                       {elem}
                     </div>
                );
            }
           
        })};
    </div>
  );
}

export default Squers