import React from 'react'
import Button from './Button';

function Home() {
    const x = 5;
    console.log("Value of x is:",x)
    const name = "Daris";
    const arr = [1,2,3];
    const obj = {
        name: "Daris",
        age: 15,
        city : "Prizren",
        country : "Kosovo",
        skills : ["JavaScript", "React"]

    }
  return (
    <>
        <h1>Home Page</h1>
        <p>{ x }</p>
        <p>Hello { name }</p>
        <p>Array { arr }</p>
        <p>{obj.name}, {obj.age}</p>
        <p>Skills: {obj.skills.join(", ")}</p>
        <br />
        <Button />
    </>
  )
}

export default Home