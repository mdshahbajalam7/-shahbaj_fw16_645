import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Home() {
    const {logout}=useContext(AuthContext)
  return (
      <div>
    <h1>Home</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home