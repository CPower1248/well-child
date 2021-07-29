import styled from "styled-components"

const CarouselContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  margin: 1%;
  padding: 1%;

  /* border: 1px solid blue; */
`;

const ProfileCurrent = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin: 1%;

  border: 5px solid black;
`;

const ProfileBeforeAfter = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;

  border: 2.5px solid black;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

function Carousel() {
  return (
    <CarouselContainer>
      <ProfileBeforeAfter>
        <ProfileImg src="https://picsum.photos/100" alt="Previous Profile" />
      </ProfileBeforeAfter>
      <ProfileCurrent>
        <ProfileImg src="https://picsum.photos/200" alt="Current Profile" />
      </ProfileCurrent>
      <ProfileBeforeAfter>
        <ProfileImg src="https://picsum.photos/100" alt="Next Profile" />
      </ProfileBeforeAfter>
    </CarouselContainer>
  )
}

export default Carousel
