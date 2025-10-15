import React from 'react'

function About() {

  const fun = () =>  {
    console.log("Hello");
  }

  const fun2 = (name) => {
    console.log("Hello" + name);
  }

  return (
    <>
        <h1>About Page</h1>

        <button onClick={fun}>Kliko</button>

        <button onClick={ () => fun2(" React")}>Kliko</button>
    </>
  )
}

export default About