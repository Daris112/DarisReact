import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import './Navbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <div><Navbar /></div>
      <div><Home /></div>
   </>
  )
}

export default App