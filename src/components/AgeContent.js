import styled from "styled-components"

const AgeContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  overflow: auto;
`
const Category = styled.div`
  display: flex;
  flex-flow: column;
`

function AgeContent() {
  return (
    <AgeContentContainer>
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
      {/* <div /> */}
      <Category>
        <img src="https://picsum.photos/75" alt="Help for parents" />
        <button>Help for parents</button>
      </Category>
    </AgeContentContainer>
  )
}

export default AgeContent
