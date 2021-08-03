import styled from "styled-components"

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 10%;
`

function Banner() {
  return (
    <BannerContainer>
      <button>-QUIT-</button> 
      <h1>Well Child</h1>
      <button>-HAMB-</button>
    </BannerContainer>
  )
}

export default Banner
