import "../App.css"

const About = () => {
  return (
    <div className="aboutContainer">
      <section className="about">
        <h1 className="aboutTitle">About FunLand 🎡</h1>

        <p className="aboutText">
          FunLand is a vibrant and colorful theme park designed to bring joy,
          excitement, and unforgettable memories to visitors of all ages,
          offering a wide variety of thrilling rides, interactive play areas,
          and family-friendly attractions that create the perfect environment
          for fun and connection, where every corner is filled with energy,
          laughter, and adventure, making it the ideal destination whether
          you're spending time with friends or enjoying a special day with
          family.
        </p>

        <div className="aboutImages">
          <img src="/images/funland1.jpg" alt="fun1" />
          <img src="/images/funland2.jpg" alt="fun2" />
          <img src="/images/funland3.jpg" alt="fun3" />
          <img src="/images/funland4.jpg" alt="fun4" />
        </div>
      </section>
    </div>
  )
}

export default About
