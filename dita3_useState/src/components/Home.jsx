import React from 'react'
import { useState } from 'react'

function Home() {

  const [vlera, setVlera] = useState(0);
  const [name, setName] = useState("Daris");
  const [arr, setArr] = useState([1,2,3,4,5]);
  const obj={
    name: "Daris",
    age: 15,
    city: "Prizren"
  };
  const[allName, setAllName]=useState([
    {id:1, name:"Daris", age:15, city:"Prizren"},
    {id:2, name:"Arianit", age:31, city:"Prishtine"},
    {id:3, name:"Ardian", age:23, city:"Peje"},
    {id:4, name:"Arber", age:32, city:"Gjakove"},
    {id:5, name:"Arsim", age:34, city:"Ferizaj"},
    {id:6, name:"Bersim", age:25, city:"Mitrovice"},
  ]);
  return (
    <>
        <h1>Home page</h1>
        <h2>{ vlera }</h2>
        <p>{ name }</p>
        <p>{ arr }</p>
        <p>{ obj.name }-{ obj.age }-{ obj.city }</p>
        {/* <p>{ allName }</p>*/}
        {allName.map((item) => (
          <div key={item.id}>
            <h2>{ item.name }</h2>
            <p>{ item.age }</p>
            <p>{ item.city }</p>
            <hr />
          </div>
        

       ) )}
    </>
  )
}

export default Home