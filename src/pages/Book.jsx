import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Book = ({ bookings, setBookings }) => {
  const navigate = useNavigate()

  const initialState = {
    customerName: "",
    customerEmail: "",
    ticketType: "",
    quantity: 1,
    bookingDate: "",
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await axios.post(
      "http://localhost:3000/bookings",
      formState
    )

    let bookingList = [...bookings]
    bookingList.push(response.data)
    setBookings(bookingList)

    setFormState(initialState)
    navigate("/bookings")
  }

  return (
    <div className="booking">
      <form className="bookingForm" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="customerName"
          onChange={handleChange}
          value={formState.customerName}
          autoComplete="off"
        />

        <label>Email:</label>
        <input
          type="email"
          name="customerEmail"
          onChange={handleChange}
          value={formState.customerEmail}
          autoComplete="off"
        />

        <label>Ticket Type:</label>
        <select
          name="ticketType"
          onChange={handleChange}
          value={formState.ticketType}
        >
          <option value="" disabled>
            Select Ticket Type
          </option>
          <option value="Adults">Adults</option>
          <option value="Kids">Kids</option>
        </select>

        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          min="1"
          onChange={handleChange}
          value={formState.quantity}
        />

        <label>Booking Date:</label>
        <input
          type="date"
          name="bookingDate"
          onChange={handleChange}
          value={formState.bookingDate}
        />

        <button type="submit">Book</button>
      </form>
    </div>
  )
}

export default Book
