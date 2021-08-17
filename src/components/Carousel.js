import styled from "styled-components"

const CarouselContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  /* border: 1px solid red; */

  img {
    margin: 2%;

    border-radius: 50%;
    box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.5);
    border: 1px solid black;
  }
`

function Carousel() {
  return (
    <CarouselContainer>
      <img src="https://picsum.photos/200" alt="Previous Profile" />
      <img src="https://picsum.photos/400" alt="Current Profile" />
      <img src="https://picsum.photos/200" alt="Next Profile" />
    </CarouselContainer>
  )
}

export default Carousel
