import styled from "styled-components"

const CarouselContainer = styled.div`
 display:flex;
 justify-content: space-evenly;

 width: 100%;

 img {
  border-radius: 50%;
 }
`

function Carousel() {
  return (
    <CarouselContainer>
      <img src="https://picsum.photos/200" alt="Previous Profile" />
      <img src="https://picsum.photos/200" alt="Current Profile" />
      <img src="https://picsum.photos/200" alt="Next Profile" />
    </CarouselContainer>
  )
}

export default Carousel
