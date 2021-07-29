import styled from "styled-components"

const AgeBarContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 15%;
  margin: 1%;
  padding: 1%;

  /* border: 1px solid blue; */
`

const AgeButton = styled.button`
  width: 20%;
  height: 60%;
  background-color: white;

  border-top: 5px solid black;
  border-bottom: 5px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
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
