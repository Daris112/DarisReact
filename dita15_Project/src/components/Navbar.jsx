import React from 'react'
import { Link } from 'react-router-dom'
import Reserve from './Reserve'
import './Navbar.css'


function Navbar() {
  return (
    <>
    <nav class="navbar">
  <div class="nav-left">La Maison</div>

  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/menu">Menu</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href="/reviews">Reviews</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>

  <a className="reserve-btn" href="/reserve">Reserve Table</a>
</nav>

    </>
  )
}

export default Navbar