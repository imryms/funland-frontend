import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Book from './pages/Book'
import MyBookings from './pages/MyBookings'
import About from './pages/About'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
    <div className="app">
      <Navbar />
      <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
      </div>

    </>
  )
}

export default App
