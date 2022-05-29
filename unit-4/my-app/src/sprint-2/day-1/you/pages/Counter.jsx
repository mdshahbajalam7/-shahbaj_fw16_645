import React from 'react'
import { useParams } from 'react-router-dom'

function Counter() {
    const params = useParams()
  return (
    <div>
        <h1>Counter:{params.initialcounter}</h1>
    </div>
  )
}

export default Counter