import React from 'react'
import './Home.css'
import phoneData from '../../data/ds.json'

const Home = () => {
  return (
    <>
    <div className="home-container">
      <h1>Home Page</h1>
    <div className='gallery'>
      {phoneData.list
  .filter(item => [2, 5, 7].includes(item.id)) 
  .map(item => (
    <div className="card" key={item.id}>
      <img src={item.image} alt={item.model} />
      <h2>{item.brand} {item.model}</h2>
      <p id='p1'>Price: ${item.price}</p>
    </div>
))}
</div>
    </div>
    </>
  )
}

export default Home