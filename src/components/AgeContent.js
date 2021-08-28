import { Route, Link, useParams } from "react-router-dom"

import styled from "styled-components"
import CategoryContent from "./CategoryContent"

const AgeContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 100%;

  /* border: 1px solid red; */
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
    font-size: 2.5rem;
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

  width: 100%;
  margin: 1%;
  background-color: whitesmoke;

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

  .categoryLink {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Klee One";
    font-size: 2rem;
    text-decoration: none;
    text-align: center;

    width: 100%;

    border-top: 7px double #2f2f2f;
    border-bottom: 7px double #2f2f2f;
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
  console.log("AGECONTENT ID: ", id)

  return (
    <AgeContentContainer>
      <AgeContentBorder>
        <CategoryContainer>
        <h3>Growth and Development</h3>
          <Category>
            <img src="https://picsum.photos/75" alt="Social and Emotional" />
            <Link to={"/ageContent/" + id + "/SE"} className="categoryLink">Social and Emotional</Link>
          </Category>
          <Route path={"/ageContent/" + id + "/SE"} component={CategoryContent} />

          <Category>
            <img src="https://picsum.photos/75" alt="Language and Communication" />
            <Link to={"/ageContent/" + id +"/LC"} className="categoryLink">Language and Communication</Link>
          </Category>

          <Category>
            <img src="https://picsum.photos/75" alt="Cognitive (Learning, Thinking, Problem-Solving)" />
            <Link to={"/ageContent/" + id + "/C"} className="categoryLink">Cognitive (Learning, Thinking, Problem-solving)</Link>
          </Category>

          <Category>
            <img src="https://picsum.photos/75" alt="Movement and Physical Development" />
            <Link to={"/ageContent/" + id + "/MP"} className="categoryLink">Movement and Physical Development</Link>
          </Category>

          <Separator />

          <Category>
            <img src="https://picsum.photos/75" alt="Help for parents" />
            <Link to={"/ageContent/" + id + "/H"} className="categoryLink">Help for parents</Link>
          </Category>
        </CategoryContainer>
      </AgeContentBorder>
    </AgeContentContainer>
  )
}

export default AgeContent
