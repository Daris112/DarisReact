import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>

    <a href="#reservation">Reserve Table</a>

    <button id="menu-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
    </nav>
    </>
  )
}

export default Navbar