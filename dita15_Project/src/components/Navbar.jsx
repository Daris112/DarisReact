import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <>
    <nav class="navbar">
  <div class="nav-left">La Maison</div>

  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/menu">Menu</a></li>
    <li><a href="/">Gallery</a></li>
    <li><a href="/">Reviews</a></li>
    <li><a href="/">Contact</a></li>
  </ul>

  <a class="reserve-btn" href="#">Reserve Table</a>
</nav>

    </>
  )
}

export default Navbar