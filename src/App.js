import styled from "styled-components"
import { Switch, useLocation } from "react-router-dom"
import { connect } from "react-redux"

import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import AgeBar from "./components/AgeBar"
import AgeContent from "./components/AgeContent"



function App({ carousel }) {
  const { pathname } = useLocation()

  const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: ${pathname === "/" ? "space-between" : "start"};

  width: 100%;
  height: 95vh;

  border: 1px solid red;
`

  return (
    <AppWrapper>
      <Banner path="/" />
      
      <Switch>
        <Carousel exact path="/" />
      </Switch>

      <AgeBar path="/" />

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
