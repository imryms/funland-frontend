import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Success = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [booking, setBooking] = useState(null)

  useEffect(() => {
    const getBooking = async () => {
      const response = await axios.get(`http://localhost:3000/bookings/${id}`)
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
      <div className="success-card">
        <h1>Thank You for Your Booking!</h1>

        <div className="booking-details">
          <div className="row">
            <span>Name</span>
            <p>{booking.customerName}</p>
          </div>

          <div className="row">
            <span>Email</span>
            <p>{booking.customerEmail}</p>
          </div>

          <div className="row">
            <span>Ticket Type</span>
            <p className="tag">{booking.ticketType}</p>
          </div>

          <div className="row">
            <span>Quantity</span>
            <p>{booking.quantity}</p>
          </div>

          <div className="row">
            <span>Date</span>
            <p>{new Date(booking.bookingDate).toLocaleDateString()}</p>
          </div>

          <div className="row total">
            <span>Total Price</span>
            <p>{booking.totalPrice} BD</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Success
