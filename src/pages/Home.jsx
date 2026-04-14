import '../App.css'
import { useNavigate } from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <h1 className="homeTitle">Welcome to FunLand 🎡</h1>

      <p className="homeText">
        Book your tickets easily and enjoy a fun day full of exciting rides!
      </p>

      <button className="homeBtn" onClick={() => navigate('/book')} >Book Now</button>
    </div>
  )
}

export default Home
