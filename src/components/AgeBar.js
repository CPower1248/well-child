import styled from "styled-components"

const AgeBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 10%;
  margin: 1%;
  padding: 1%;

  /* border: 1px solid blue; */
`

const AgeButton = styled.button`
  width: 20%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.3);

  border-top: 4px solid rgba(0, 0, 0, 0.75);
  border-bottom: 4px solid rgba(0, 0, 0, 0.75);
  border-left: 1px solid rgba(0, 0, 0, 0.75);
  border-right: 1px solid rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: rgba(255, 255, 0, .25);
  }
`

const AgeButtonStart = styled(AgeButton)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

const AgeButtonEnd = styled(AgeButton)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

function AgeBar() {
  return (
    <AgeBarContainer>
      <AgeButtonStart>1yo</AgeButtonStart>
      <AgeButton>2yo</AgeButton>
      <AgeButton>3yo</AgeButton>
      <AgeButton>4yo</AgeButton>
      <AgeButtonEnd>5yo</AgeButtonEnd>
    </AgeBarContainer>
  )
}

export default AgeBar
