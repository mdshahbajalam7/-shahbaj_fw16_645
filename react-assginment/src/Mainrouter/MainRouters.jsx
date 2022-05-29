import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Displaydata from '../pages/Displaydata'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

function MainRouters() {
  return (
    <div>
      <h3><a href="Registration">Registration</a></h3>
      {/* <Registration/> */}
      <Routes>
        <Route path='Registration' element={<Registration/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='displaydata' element={<Displaydata/>}/>
      </Routes>
        {/* <Login/> */}
    </div>
  )
}

export default MainRouters