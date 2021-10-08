import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

import styled from "styled-components"
import homeIcon from "../images/wc-home.png"
import hamb from "../images/hamb.png"

import { toggleModal } from "../actions"

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  width: 100%;
  height: auto;
  padding: 1%;

  /* border: 1px solid red; */

  .link {
    min-width: 40px;
    width: 5%;
    margin: 2%;

    /* border: 1px solid blue; */
  }
`

const Title = styled.h1`
  font-family: 'Gloria Hallelujah';
  font-weight: bolder;
  font-size: 5rem;

  /* border: 1px solid green; */
`

function Banner({ toggleModal, modal }) {
  const handleToggleModal = (modal) => {
    toggleModal(!modal)
  }

  return (
    <BannerContainer>
      <NavLink to="/" className="link">
        <img src={homeIcon} alt="home" className="homeButton" />
      </NavLink> 

      <Title>WeLL ChiLD</Title>

      <button onClick={handleToggleModal} className="link">
        <img src={hamb} alt="menu" />
      </button>
    </BannerContainer>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps, { toggleModal })(Banner)
