import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Book from './pages/Book'
import MyBookings from './pages/MyBookings'
import About from './pages/About'
import Footer from './components/Footer'
import Success from './pages/Success'
import './App.css'

const App = () => {
  const [bookings, setBookings] = useState([])
  return (
    <>
    <div className="app">
      <Navbar />
      <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book bookings={bookings} setBookings={setBookings} />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/booking-success/:id" element={<Success />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
      </div>

    </>
  )
}

export default App
