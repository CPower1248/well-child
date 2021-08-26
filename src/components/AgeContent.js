import { useParams } from "react-router-dom"

import styled from "styled-components"
import CategoryContent from "./CategoryContent"

const AgeContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 100%;

  /* border: 1px solid red; */

  h2 {
    font-family: 'Luckiest Guy', cursive;
    color: #1f1f1f;
    margin: 2%;

    text-decoration: underline;
  }
`

const AgeContentBorder = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  width: 80%;
  margin-bottom: 1%;

  border-radius: 15px;
  border: 5px double #2f2f2f;
  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);

  h3 {
    font-family: "Gloria Hallelujah";
    font-size: 2rem;
    text-decoration: underline;
    font-weight: bold;

    margin: 1%;
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

  width: 95%;
  margin: 1%;

  border-radius: 15px;
  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
  /* border: 1px solid green; */

  img {
    width: 15vw;
    height: auto;

    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: 2px solid black;
  }

  button {
    font-family: "Klee One";
    font-weight: bold;
    font-size: 2rem;
    
    width: 100%;

    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`
const Separator = styled.div`
  margin: 2%;

  border: 7px dotted black;
`

function AgeContent() {
  const { id } = useParams()
  console.log(id)
  
  return (
    <AgeContentContainer>
      <AgeContentBorder>
        <h3>Growth and Development</h3>
        <CategoryContainer>
          <Category>
            <img src="https://picsum.photos/75" alt="Social and Emotional" />
            <button>Social and Emotional</button>
          </Category>
          <CategoryContent />

          <Category>
            <img src="https://picsum.photos/75" alt="Language and Communication" />
            <button>Language and Communication</button>
          </Category>

          <Category>
            <img src="https://picsum.photos/75" alt="Cognitive (Learning, Thinking, Problem-Solving)" />
            <button>Cognitive (Learning, Thinking, Problem-solving)</button>
          </Category>

          <Category>
            <img src="https://picsum.photos/75" alt="Movement and Physical Development" />
            <button>Movement and Physical Development</button>
          </Category>

{/* Fix Separator styling */}
          <Separator />

          <Category>
            <img src="https://picsum.photos/75" alt="Help for parents" />
            <button>Help for parents</button>
          </Category>
        </CategoryContainer>
      </AgeContentBorder>
    </AgeContentContainer>
  )
}

export default AgeContent
