import React from 'react'
import {useState} from 'react';

function About() {

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
        <h1>About page</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        {allName.map((item) => (
          <tr key={item.id}>
          
            <td><h2>{ item.name }</h2></td>
           

           
              <td><p>{ item.age }</p></td>
            

            
              <td><p>{ item.city }</p></td>
            </tr>
         
         
          ) )}
          
           </table>
    </>
        )
}

export default About