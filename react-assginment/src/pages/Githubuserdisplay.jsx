import React from 'react'
import styles from "../pages/data.module.css"

function Githubuserdisplay(props) {
  const {name,description,visibility,language}=props
  return (
    <div className={styles.props}>
      <h1>Name: {name}</h1>
      <h1>Description:{description}</h1>
      <div className={styles.visibility}>
        <h1>{visibility}</h1>
      </div>
      <h1>Language:{language}</h1>
      {/* <img src={avatar_url} alt="" /> */}
    </div>
  )
}

export default Githubuserdisplay