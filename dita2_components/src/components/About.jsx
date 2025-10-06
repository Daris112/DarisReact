import React, { useState } from 'react'

function About() {
    const [vlera, setVlera] = useState(0);
  return (
    <>
        <h1>About Us</h1>
        <p>Current value: {vlera}</p>
        <button onClick={()=> setVlera(vlera + 1)}>Increase Value</button>
        <button onClick={()=> setVlera(vlera - 1)}>Decrease Value</button>
    </>
  )
}

export default About