import React, { useState } from 'react'
import BlogLists from './BlogLists';

function Home() {

const [list, setList] = useState([
    {id:1, name:"Albatris", age:"15",city:"Prizren"},
    {id:2, name:"Fazli", age:"15",city:"Prizren"},
    {id:3, name:"Lis", age:"15",city:"Prizren"},
    {id:4, name:"Daris", age:"15",city:"Prizren"},
    {id:5, name:"Dori", age:"15",city:"Prizren"},
    {id:6, name:"Rraif", age:"15",city:"Prizren"},

]);

const deleteButton = (id) => {
  const newList = list.filter(list => list.id !== id);

  setList(newList)
}

const viewButton = (id) => {
  const newList = list.filter(list => list.id == id);

  setList(newList)
}

  return (
    <>
        <h1>Home Page</h1>
          {/* {list.map((item) => (
          <div key={item.id}>
            <h2>{ item.name }</h2>
            <p>{ item.age }</p>
            <p>{ item.city }</p>
            <hr />
            
           
          </div>
     ) )} */}
            
      
        <BlogLists list={list}  title = "Lista e nxenesave" deleteButton={deleteButton} viewButton={viewButton}/>
    </>
  )
}

export default Home