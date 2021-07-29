import styled from "styled-components"
import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import AgeBar from "./components/AgeBar"
import AgeContent from "./components/AgeContent"

const AppWrapper = styled.h1`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  margin: 1%;
  padding: 1%;
  height: 95vh;
  text-align: center;
  
  /* border: 1px solid black; */
`;

function App() {
  return (
    <AppWrapper>
      <Banner />
      <Carousel />
      <AgeBar />
      {/* <AgeContent /> */}
    </AppWrapper>
  );
}

export default App;
