import React, { useEffect, useState } from 'react'
import BlogLists from './BlogLists';

function Home() {

const [list, setList] = useState([]);
const [loading,  setLoading] = useState(true);

const deleteButton = (id) => {
  const newList = list.filter(list => list.id !== id);

  setList(newList)
}

const viewButton = (id) => {
  const newList = list.filter(list => list.id == id);

  setList(newList)
}

const [error, setError]= useState()

 useEffect(() => {
    fetch('http://localhost:4000/list')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setList(data);
          console.log(data);
        }, 1500); 
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

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
      
            
      
        {list &&<BlogLists list={list}  title = "Lista e nxenesave" deleteButton={deleteButton} viewButton={viewButton}/>}

        {loading && <div>Loading...</div>}
        
        {error && <h2>{ error }</h2>}
    </>
  )
}

export default Home