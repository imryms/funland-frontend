import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Success = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [booking, setBooking] = useState(null)
  const API_URL = import.meta.env.VITE_API_URL


  useEffect(() => {
    const getBooking = async () => {
      const response = await axios.get(`${API_URL}/bookings/${id}`)
      setBooking(response.data)
    }

    getBooking()
  }, [id])

  if (!booking) {
    return (
      <div className="no-booking">
        <h2>No Booking Found ..</h2>
        <p>
          It looks like you haven’t made any booking yet. Start now and enjoy
          your experience.
        </p>
        <button className="Btn" onClick={() => navigate("/book")}>
          Book Now
        </button>
      </div>
    )
  }

  return (
    <div className="success">
      <h1>Thank You for Your Booking!</h1>

      <p>
        <strong>Name:</strong> {booking.customerName}
      </p>
      <p>
        <strong>Email:</strong> {booking.customerEmail}
      </p>
      <p>
        <strong>Ticket Type:</strong> {booking.ticketType}
      </p>
      <p>
        <strong>Quantity:</strong> {booking.quantity}
      </p>
      <p>
        <strong>Date:</strong>{" "}
        {new Date(booking.bookingDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Total Price:</strong> {booking.totalPrice} BD
      </p>
    </div>
  )
}

export default Success
