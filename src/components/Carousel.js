function Carousel() {
  return (
    <div className="carousel">
      <div className="profile before">
        <img src="https://picsum.photos/100" alt="Previous Profile" />
      </div>
      <div className="profile current">
        <img src="https://picsum.photos/200" alt="Current Profile" />
      </div>
      <div className="profile after">
        <img src="https://picsum.photos/100" alt="Next Profile" />
      </div>
    </div>
  )
}

export default Carousel
