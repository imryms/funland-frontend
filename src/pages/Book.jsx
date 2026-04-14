import { useState } from "react"
import axios from "axios"

const Book = ({ bookings, setBookings }) => {
  const initialState = {
    customerName: "",
    customerEmail: "",
    ticketType: "",
    quantity: 1,
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
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Book</button>
    </form>
  )
}

export default Book
