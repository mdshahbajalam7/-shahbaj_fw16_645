import React from 'react'
import { Link } from 'react-router-dom'
import "./data.css"
import Navbar from './Navbar'

function MainRouter() {
  return (
    <div>
        <Navbar/>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="skill">Skill</Link>
        <Link to="projects">Project</Link>
        <Link to="Resume">Resume</Link>
    </div>
  )
}

export default MainRouter