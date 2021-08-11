import { NavLink } from "react-router-dom"

import styled from "styled-components"

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 1%;

  /* border: 1px solid red; */
`

const Title = styled.h1`
  line-height: 5rem;
  letter-spacing: 10px;
  font-weight: bolder;
`

function Banner() {
  return (
    <BannerContainer>
      <NavLink to="/" className="link">-HOME-</NavLink> 
      <Title>WeLL ChiLD</Title>
      <NavLink to="/" className="link">-HAMB-</NavLink>
    </BannerContainer>
  )
}

export default Banner
