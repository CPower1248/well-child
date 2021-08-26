import { NavLink } from "react-router-dom"

import styled from "styled-components"
import homeIcon from "../images/wc-home.png"
import hamb from "../images/hamb.png"

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 1%;

  /* border: 1px solid red; */

  .link {
    min-width: 40px;
    width: 5%;
    margin: 2%;
  }
`

const Title = styled.h1`
  font-family: 'Gloria Hallelujah';
  font-weight: bolder;
  font-size: 5rem;
`

function Banner() {
  return (
    <BannerContainer>
      <NavLink to="/" className="link">
        <img src={homeIcon} alt="home" />
      </NavLink> 
      <Title>WeLL ChiLD</Title>
      <NavLink to="/" className="link">
        <img src={hamb} alt="menu" />
      </NavLink>
    </BannerContainer>
  )
}

export default Banner
