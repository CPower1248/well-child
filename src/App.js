import styled from "styled-components"
import { Switch, Route, useLocation } from "react-router-dom"
import { connect } from "react-redux"

import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import AgeBar from "./components/AgeBar"
import AgeContent from "./components/AgeContent"

import Modal from "./components/Modal"

function App({ modal }) {
  const { pathname } = useLocation()

  const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: ${pathname === "/" ? "space-between" : "start"};

  width: 100%;
  min-height: 100vh;

  /* border: 1px solid red; */
`

  return (
    <AppWrapper>
      <Banner path="/" />
      
      <Switch>
        <Carousel exact path="/" />
      </Switch>

      <AgeBar path="/" />

      <Switch>
        <Route path={"/ageContent/:id"} component={AgeContent} />
      </Switch>  

      {modal ? <Modal/> : null}
    </AppWrapper>
  );
}

// Make state and action for modal display
const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps, {})(App);
