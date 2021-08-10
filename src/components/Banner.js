import { NavLink } from "react-router-dom"

import styled from "styled-components"

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 10%;

  /* border: 1px solid red; */
`

function Banner() {
  return (
    <BannerContainer>
      <NavLink to="/" >-HOME-</NavLink> 
      <h1>Well Child</h1>
      <button>-HAMB-</button>
    </BannerContainer>
  )
}

export default Banner
