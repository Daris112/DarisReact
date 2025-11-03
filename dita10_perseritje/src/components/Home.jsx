import React from 'react'
import './Home.css'


function Home() {
  return (
    <>
        <div className="home-container">
      <h1>Home Page</h1>

      <div className="gallery">
        <div className="card">
          <img src="./winter1.webp" alt="Winter 1" />
          <h2>Nature in winter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos unde optio accusantium provident laboriosam rerum.</p>
        </div>

        <div className="card">
          <img id='img1' src="./winter2.webp" alt="Winter 2" />
          <h2>Nature in winter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos unde optio accusantium provident laboriosam rerum.</p>
        </div>

        <div className="card">
          <img src="./winter3.webp" alt="Winter 3" />
          <h2>Nature in winter</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos unde optio accusantium provident laboriosam rerum.</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home