import './App.css'
import Navbar from './components/Navbar'
import Index from './components/Index'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reserve from './components/Reserve'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/menu" element={<Menu />}/>
        <Route exact path="/gallery" element={<Gallery />}/>
        <Route exact path="/reserve" element={<Reserve />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/reviews" element={<Reviews />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
