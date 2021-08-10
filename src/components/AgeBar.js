import styled from "styled-components"
import { Link } from "react-router-dom"

const AgeBarContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10%;
`

function AgeBar() {
  return (
    <AgeBarContainer>
      <div>
        <h2>How old are you?</h2>
      </div>
      <div>
        <button>
          <Link to="/ageContent/1">1 year</Link>
        </button>
        <Link to="/ageContent/2">2 year</Link>
        <Link to="/ageContent">3 year</Link>
        <Link to="/ageContent">4 year</Link>
        <Link to="/ageContent">5 year</Link>
      </div>
    </AgeBarContainer>
  )
}

export default AgeBar
