import './App.css';

function App() {
  return (
    <div className="App">

      {/* Banner Container? */}
      <div className="banner">
        <span>-QUIT-</span> 
        <h1>Well Child</h1>
        <span>-HAMB-</span>
      </div>

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

      <div className="age-bar">
        <div className="age-1 selector">1yo</div>
        <div className="age-2 selector">2yo</div>
        <div className="age-3 selector">3yo</div>
        <div className="age-4 selector">4yo</div>
        <div className="age-5 selector">5yo</div>
      </div>

    </div>
  );
}

export default App;
