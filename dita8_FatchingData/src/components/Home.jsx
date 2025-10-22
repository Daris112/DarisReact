import React, { useEffect, useState } from 'react'
import BlogLists from './BlogLists';
import usefetch from './usefetch';

function Home() {
const {
  list,
  error,
  loading
}=usefetch('http://localhost:4000/list')

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
            
      
        {list &&<BlogLists list={list}  title = "Lista e nxenesave" deleteButton={deleteButton} viewButton={viewButton}/>}

        {loading && <div>Loading...</div>}
        
        {error && <h2>{ error }</h2>}
    </>
  )
}

export default Home