import React from 'react'
import Newtask from './Newtask'
import Tasks from './Tasks'
import styles from "../pages/Login.module.css"
function Home() {
  return (
   <div className={styles.task}>
     <Tasks/>
      <Newtask/>
    </div>
  )
}

export default Home