import styled from "styled-components"

const AgeContentContainer = styled.div`
  width: 95%;
  height: 80%;
  margin: 1%;
  padding: 1%;

  /* border: 1px solid blue; */
`

const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 1%;
  padding: 1%;

  border-top: 3px solid black;
  border-bottom: 3px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 10px;

  h2 {
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 2.5rem;
    text-decoration: underline;
  }
`

const Category = styled.div`
  display: flex;
  width: 85%;
  margin: 2%;

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

const Separator = styled.div`
  width: 70%;
  margin-top: 5%;
  margin-bottom: 5%;

  border-top: 3px dotted black;
`

function AgeContent() {
  return (
    <AgeContentContainer>
      <CategoryContainer>
        <h2>Growth and Development</h2>
        <Category>
          <img src="https://picsum.photos/75" alt="Movement" />
          <button>Movement</button>
        </Category>
        <Category>
          <img src="https://picsum.photos/75" alt="Hearing, Seeing and Talking" />
          <button>Hearing, Seeing and Talking</button>
        </Category>
        <Category>
          <img src="https://picsum.photos/75" alt="Feelings and Behavior" />
          <button>Feelings and Behavior</button>
        </Category>
        <Category>
          <img src="https://picsum.photos/75" alt="Feeding" />
          <button>Feeding</button>
        </Category>
        <Category>
          <img src="https://picsum.photos/75" alt="Sleep" />
          <button>Sleep</button>
        </Category>
        <Category>
          <img src="https://picsum.photos/75" alt="Shots" />
          <button>Shots</button>
        </Category>
        <Separator />
        <Category>
          <img src="https://picsum.photos/75" alt="Help for parents" />
          <button>Help for parents</button>
        </Category>
      </CategoryContainer>
    </AgeContentContainer>
  )
}

export default AgeContent
