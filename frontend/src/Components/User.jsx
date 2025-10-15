import React from 'react'

const User = ({ name, dept, skills,subjects }) => {
  return (
    <div>
      <h2>Hello {name}, welcome to React!</h2>
      <p>Your department is: {dept}</p>
      <ul>
        {skills.map((skill)=> (
          <li> {skill}</li>
        ))}
      </ul>
      <ol>
           {subjects.map((sub)=> (
          <li> {sub}</li>
        ))} 
      </ol>
    </div>
  )
}

export default User


