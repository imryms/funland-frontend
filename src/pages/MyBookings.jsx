import { useState, useEffect } from "react"
import axios from 'axios'
const MyBookings = () => {

  const[bookings, setBookings] = useState([])
  const[userEmail, setUserEmail] =useState("")

  const getBookings = async()=>{
    try {
      const res = await axios.get(`http://localhost:3000/bookings?email=${userEmail}`)
      setBookings(res.data)
    } catch (error) {
      console.error("Error getting bookings" , error)
    }
  }

  const handleDelete = async(id) =>{
    if (window.confirm("Are you sure you want to delete this booking ?")){
      try {
        await axios.delete(`http://localhost:3000/bookings/${id}`)
        setBookings(bookings.filter(item => item._id !== id))
      } catch (error) {
        console.error("Error deleting booking" , error)
      }
    }
  }

  const handleChange=(event)=>{
    setUserEmail(event.target.value)
  }

  const deleteOnClick=(id)=>{
    handleDelete(id)
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
            <p>Email:{item.customerEmail}</p>
            <p>Type:{item.ticketType}</p>
            <p>Quantity:{item.quantity}</p>
            <p>Total:{item.totalPrice}</p>
            <p>Date:{item.bookingDate}</p>

            <button onClick={()=>deleteOnClick(item_id)}>Delete</button>
          </div>
        ))) : (<p>No booking found</p>)}
      </div>
    </div>

)
}

export default MyBookings
