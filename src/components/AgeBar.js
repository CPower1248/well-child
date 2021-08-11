import styled from "styled-components"
import { Link } from "react-router-dom"

const AgeBarContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 1%;

  /* border: 1px solid red; */
`

const AgeButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 90%;
  margin: 1%;

  /* border: 1px solid blue; */
`

const AgeButtonStart = styled.button`
  width: 15%;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top: 5px double black;
  border-bottom: 5px double black;
`

const AgeButton = styled.button`
  width: 15%;
  border-radius: 0%;
  border-top: 5px double black;
  border-bottom: 5px double black;
`

const AgeButtonEnd = styled.button`
  width: 15%;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 5px double black;
  border-bottom: 5px double black;
`

function AgeBar() {
  return (
    <AgeBarContainer>
      <h2>How old are you?</h2>
      <AgeButtonContainer>
        <AgeButtonStart>
          <Link to="/ageContent/1" className="link">1 YEAR</Link>
        </AgeButtonStart>
        <AgeButton>
          <Link to="/ageContent/2" className="link">2 YEARS</Link>
        </AgeButton>
        <AgeButton>
          <Link to="/ageContent/3" className="link">3 YEARS</Link>
        </AgeButton>
        <AgeButton>
          <Link to="/ageContent/4" className="link">4 YEARS</Link>
        </AgeButton>
        <AgeButtonEnd>
          <Link to="/ageContent/5" className="link">5 YEARS</Link>
        </AgeButtonEnd>
      </AgeButtonContainer>
    </AgeBarContainer>
  )
}

export default AgeBar
