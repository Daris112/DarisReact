import React, { useEffect, useState } from 'react'
import BlogLists from './BlogLists';

function Home() {

const [list, setList] = useState([]);

const deleteButton = (id) => {
  const newList = list.filter(list => list.id !== id);

  setList(newList)
}

const viewButton = (id) => {
  const newList = list.filter(list => list.id == id);

  setList(newList)
}

const [error, setError]= useState()

useEffect( () => {
  fetch('http://localhost:4000/list')
  .then( (res) => {
    return res.json()
  })
  .then( (data) => {
    
    setList(data)
    console.log(data)
    
  })
  .catch( (err) => {
    
    setError(err.message)
  })
}, [])



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
        
        <h2>{ error }</h2>
    </>
  )
}

export default Home