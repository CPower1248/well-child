import { Route, Link, useParams, useLocation } from "react-router-dom"

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

  background-color: rgba(255, 255, 255, 0.25);
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

  text-align: center;

  width: 85%;

  /* border: 1px solid blue; */
`

const Category = styled.div`
  display: flex;

  width: 100%;
  margin: 1%;
  background-color: lavenderblush;

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
  const { pathname } = useLocation()

  return (
    <AgeContentContainer>
      <AgeContentBorder>
        <CategoryContainer>
        <h3>What most children do by this age:</h3>
          <Category>
            <img src="https://picsum.photos/75" alt="Social and Emotional" />
            {pathname === `/ageContent/${id}/SE` ?
              <Link to={"/ageContent/" + id} className="categoryLink">Social and Emotional</Link> :
              <Link to={"/ageContent/" + id + "/SE"} className="categoryLink">Social and Emotional</Link>
            }
          </Category>
          <Route path={"/ageContent/" + id + "/SE"} component={CategoryContent} />

          <Category>
            <img src="https://picsum.photos/75" alt="Language and Communication" />
            {pathname === `/ageContent/${id}/LC` ?
              <Link to={"/ageContent/" + id} className="categoryLink">Language and Communication</Link> :
              <Link to={"/ageContent/" + id +"/LC"} className="categoryLink">Language and Communication</Link>
            }
          </Category>
          <Route path={"/ageContent/" + id + "/LC"} component={CategoryContent} />

          <Category>
            <img src="https://picsum.photos/75" alt="Cognitive (Learning, Thinking, Problem-Solving)" />
            {pathname === `/ageContent/${id}/CL` ?
              <Link to={"/ageContent/" + id} className="categoryLink">Cognitive (Learning, Thinking, Problem-solving)</Link> :
              <Link to={"/ageContent/" + id + "/CL"} className="categoryLink">Cognitive (Learning, Thinking, Problem-solving)</Link>
            }
          </Category>
          <Route path={"/ageContent/" + id + "/CL"} component={CategoryContent} />

          <Category>
            <img src="https://picsum.photos/75" alt="Movement and Physical Development" />
            {pathname === `/ageContent/${id}/MP` ?
              <Link to={"/ageContent/" + id} className="categoryLink">Movement and Physical Development</Link> :
              <Link to={"/ageContent/" + id + "/MP"} className="categoryLink">Movement and Physical Development</Link>
            }
          </Category>
          <Route path={"/ageContent/" + id + "/MP"} component={CategoryContent} />

          {/* Fix Separator styling */}
          <Separator />

          <Category>
            <img src="https://picsum.photos/75" alt="Help for parents" />
            {pathname === `/ageContent/${id}/HP` ?
              <Link to={"/ageContent/" + id} className="categoryLink">Help for parents</Link> :
              <Link to={"/ageContent/" + id + "/HP"} className="categoryLink">Help for parents</Link>
            }
          </Category>
          <Route path={"/ageContent/" + id + "/HP"} component={CategoryContent} />
        </CategoryContainer>
      </AgeContentBorder>
    </AgeContentContainer>
  )
}

export default AgeContent
