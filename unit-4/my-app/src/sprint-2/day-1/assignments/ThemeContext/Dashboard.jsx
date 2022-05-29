import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { Dashboarddiv,MainDiv } from './Theme.styled'


const data = [
  {
    id:1,
    name:"Md shahbaj alam",
    students:"Masai School"
  },
  {
    id:2,
    name:"Guddu ali",
    students:"Masai School"
  },
  {
    id:3,
    name:"Md Jawed Hussain",
    students:"Masai School"
  }
]


function Dashboard() {
  const [Theme]=useContext(ThemeContext)
  return (
   <Dashboarddiv color={Theme}>
     {data.map((elem)=>{
       return(
        <MainDiv color={Theme}>
          <h3>Student_Name: {elem.name}</h3>
          <p>Student: {elem.students}</p>
        </MainDiv>
       )
     })}

   </Dashboarddiv>
  )
}

export default Dashboard