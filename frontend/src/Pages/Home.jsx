import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h2>welcome</h2>
      <ul>
        <li>
          <Link to="/state" >usestate</Link>
        </li>
      </ul>
      </div>
  )
}

export default Home