import { useState, useEffect } from "react"
import axios from 'axios'
const MyBookings = () => {

  const[bookings, setBookings] = useState([])
  const[userEmail, setUserEmail] =useState("")
    const API_URL = import.meta.env.VITE_API_URL


  const getBookings = async()=>{
    try {
      const res = await axios.get(`${API_URL}/bookings?email=${userEmail}`)
      setBookings(res.data)
    } catch (error) {
      console.error("Error getting bookings" , error)
    }
  }

  const handleDelete = async(id) =>{
    if (window.confirm("Are you sure you want to cancel this booking ?")){
      try {
        await axios.delete(`${API_URL}/bookings/${id}`)
        setBookings(bookings.filter(item => item._id !== id))
      } catch (error) {
        console.error("Error deleting booking" , error)
      }
    }
  }

  const handleChange=(event)=>{
    setUserEmail(event.target.value)
  }


  useEffect(()=>{
    getBookings()
  }, [])

  return (
    <div className="booking-container">
      <h2>MyBookings</h2>

      <div className="search-by-email">
        <input
          type="email"
          placeholder="Enter your email"
          value={userEmail}
          onChange={handleChange}/>
        <button onClick={getBookings}>Search</button>
      </div>

      <div className={"cards-container"}>
        {bookings.length > 0 ? (
          bookings.map((item)=>(
          <div key={item._id} className="booking-card">
            <h3>{item.customerName}</h3>
            <p>Email: {item.customerEmail}</p>
            <p>Type: {item.ticketType}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: {item.totalPrice}BHD</p>
            <p>Date: {new Date(item.bookingDate).toLocaleDateString()}</p>

            <button onClick={()=>handleDelete(item._id)}>Cancel booking</button>
          </div>
        ))) : userEmail==="" ? (<p>Please enter your <strong>email</strong> to show your bookings🎡</p>)
        :(<p>No booking found</p>)}
      </div>
    </div>

)
}

export default MyBookings
