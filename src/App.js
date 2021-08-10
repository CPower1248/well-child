import styled from "styled-components"
import { Switch, Route, Link } from "react-router-dom"
import { connect } from "react-redux"

import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import AgeBar from "./components/AgeBar"
import AgeContent from "./components/AgeContent"

const Home = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 95vh;
`
const NotHome = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 95vh;
`

function App({ carousel }) {
  let AppWrapper

  if (carousel) {
    AppWrapper = Home
  } else {
    AppWrapper = NotHome
  }

  return (
    <AppWrapper>
      <Banner path="/" />
      <AgeBar path="/" />

      <Carousel path="/Home" />

      <Switch>
        <AgeContent path="/ageContent" />
      </Switch>
      
    </AppWrapper>
  );
}

const mapStateToProps = state => {
  return {
    carousel: state.carousel
  }
}

export default connect(mapStateToProps, {})(App);
