import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">FunLand</Link>
      </div>

      <div className="navbarLinks" >
        <Link to="/">Home</Link>
        <Link to="/book">Book</Link>
        <Link to="bookings">My Bookings</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
export default Navbar
