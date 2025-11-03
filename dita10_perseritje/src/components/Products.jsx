import React, { useEffect, useState } from 'react'
import BlogLists from './BlogLists';

function Products() {

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
        <BlogLists list={list}  title = "Phones" deleteButton={deleteButton} viewButton={viewButton} editButton={editButton}/>
    </>
  )
}

export default Products