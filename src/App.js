import './App.css';
import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import AgeBar from "./components/AgeBar"
import AgeContent from "./components/AgeContent"

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <Carousel /> */}
      <AgeBar />
      <AgeContent />
    </div>
  );
}

export default App;
