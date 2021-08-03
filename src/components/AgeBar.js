import styled from "styled-components"

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
        <button>1 year</button>
        <button>2 years</button>
        <button>3 years</button>
        <button>4 years</button>
        <button>5 years</button>
      </div>
    </AgeBarContainer>
  )
}

export default AgeBar
