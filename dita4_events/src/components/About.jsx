import React, { useState } from 'react'

function About() {


  const [name, setName] = useState("Daris");
  const [age, setAge] = useState(21);
  const [color, setColor] = useState(true)
  return (
    <>
      <h1>About Page</h1>

      <p>Name: {name}</p>
      <button onClick={() => setName("Lis")}>Change Name</button>
      <button onClick={() => setName("Daris")}>Return Name</button>

      <p>Age: {age}</p>
      <button onClick={() => setAge(age +1)}>Increase Age</button>
      <button onClick={() => setAge(age -1)}>Decrease Age</button>

      <p style={{color:"blue",fontSize:25}}>This is a colored text</p>

      <p style={{color: color ? "red":"green",fontSize:25}}>This is a colored text</p>
      <button onClick={() => setColor(!color)}>Change Color</button>

      <p style={{color: age<18  ? "red":"green",fontSize:25}}>This is a colored text</p>
     
    </>
  )
}

export default About