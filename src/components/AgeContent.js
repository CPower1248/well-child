import styled from "styled-components"

const AgeContentContainer = styled.div`
  width: 95%;
  margin: 1%;
  padding: 1%;

  /* border: 1px solid blue; */
`

const AgeCategory = styled.div`
  display: flex;
  margin: 1%;

  border-top: 5px solid black;
  border-bottom: 5px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 10px;

  button {
    width: 100%;
    background-color: white;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  button:hover {
    background-color: black;
    color: white;
  }

  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`

function AgeContent() {
  return (
    <AgeContentContainer>
      <AgeCategory>
        <img src="https://picsum.photos/75" alt="Movement" />
        <button>Movement</button>
      </AgeCategory>
      <AgeCategory>
        <img src="https://picsum.photos/75" alt="Hearing, Seeing and Talking" />
        <button>Hearing, Seeing and Talking</button>
      </AgeCategory>
      <AgeCategory>
        <img src="https://picsum.photos/75" alt="Feelings and Behavior" />
        <button>Feelings and Behavior</button>
      </AgeCategory>
    </AgeContentContainer>
  )
}

export default AgeContent
