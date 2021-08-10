import styled from "styled-components"

const AgeContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 100%;

  /* border: 1px solid red; */

  h2 {
    margin: 2%;

    text-decoration: underline;
  }
`

const CategoryContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 85%;

  /* border: 1px solid blue; */
`

const Category = styled.div`
  display: flex;

  width: 85%;
  margin: 1%;

  /* border: 1px solid green; */

  img {
    width: 13vw;
    height: auto;
  }

  button {
    width: 100%;

    font-size: 1.5rem;
  }
`
// Separator needs styling
const Separator = styled.div`
  margin: 2%;

  border: 3px dotted red;
`

function AgeContent() {
  return (
    <AgeContentContainer>
      <h2>Growth and Development</h2>
      <CategoryContainer>
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
