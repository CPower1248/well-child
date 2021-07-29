import styled from "styled-components"

const BannerContainer = styled.div`
  display: flex;
  width: 95%;
  height: 10%;
  margin: 1%;
  padding: 1%;
    
  /* border: 1px solid blue; */  
`

const BannerContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  /* border: 1px solid green; */

  button {
    width: 15%;
    background-color: white;

    border-radius: 10px;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`

function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <button>-QUIT-</button> 
        <h1>Well Child</h1>
        <button>-HAMB-</button>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
