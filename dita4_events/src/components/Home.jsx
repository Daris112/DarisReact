import React from 'react'

function Home() {
  const fun = () => {
    console.log("Home page")
  }

  const fun2 = (para) => {
    console.log("Hello" + para)
  }
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={fun}>Click me</button>
      <button onClick={() => fun2(" Daris")}>Click me 2</button>
    </>
  )
}

export default Home