import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Success = () => {
  const { id } = useParams()
  const [booking, setBooking] = useState(null)

  useEffect(() => {
    const getBooking = async () => {
      const response = await axios.get(
        `http://localhost:3000/bookings/${id}`
      )
      setBooking(response.data)
    }

    getBooking()
  }, [id])

  if (!booking) {
    return <h2>No booking...</h2>
  }

  return (
    <div className="success">
      <h1>Thank You for Your Booking!</h1>

      <p><strong>Name:</strong> {booking.customerName}</p>
      <p><strong>Email:</strong> {booking.customerEmail}</p>
      <p><strong>Ticket Type:</strong> {booking.ticketType}</p>
      <p><strong>Quantity:</strong> {booking.quantity}</p>
      <p><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
      <p><strong>Total Price:</strong> {booking.totalPrice} BD</p>
    </div>
  )
}

export default Success
