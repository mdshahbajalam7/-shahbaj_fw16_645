import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

function Routers() {
  return (
    <div> <Navbar/>
    <Routes>
      <Route path='home' element={<Home/>}/>
         {/* <Route path='login/*' element={<Login/>}> */}
         <Route path='/signin' element={<SignIn/>}/>
       {/* </Route> */}
    </Routes></div>
  )
}

export default Routers