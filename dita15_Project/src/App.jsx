import './App.css'
import Navbar from './components/Navbar'
import Index from './components/Index'
import Menu from './components/Menu'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/menu" element={<Menu />}/>
      </Routes>
    </Router>
  )
}

export default App
