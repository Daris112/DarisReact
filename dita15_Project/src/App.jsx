import './App.css'
import Navbar from './components/Navbar'
import Index from './components/Index'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />}/>
      </Routes>
    </Router>
  )
}

export default App
