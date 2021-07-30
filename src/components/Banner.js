import styled from "styled-components"

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 10%;
  margin: 1%;
  padding: 1%;
    
  /* border: 1px solid blue; */

  button {
    width: 15%;
    background-color: rgba(0, 0, 0, 0.3);

    border-top: 2px solid rgba(0, 0, 0, 0.75);
    border-bottom: 2px solid rgba(0, 0, 0, 0.75);
    border-left: 1px solid rgba(0, 0, 0, 0.75);
    border-right: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 10px;

    &:hover {
      background-color: rgba(255, 255, 0, .25);
    }
  }

  h1 {
    font-size: 3.5rem;
  }
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
