import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"

const AgeBarContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 1%;

  /* border: 1px solid red; */

  h2 {
    font-family: 'Gloria Hallelujah';
    font-size: 2.5rem;
    margin-bottom: 2%;
  }
`

const AgeButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 90%;
  margin: 1%;

  /* border: 1px solid blue; */

  .link {
    font-family: 'Klee One';
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
    letter-spacing: 0.2rem;
    line-height: 2rem;
  }

  .activeStart {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top: 2px solid #2f2f2f;
    border-bottom: 2px solid #2f2f2f;

    transform: scale(1.1);
  }

  .active {
    border-top: 2px solid #2f2f2f;
    border-bottom: 2px solid #2f2f2f;

    transform: scale(1.1);
  }

  .activeEnd {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 2px solid #2f2f2f;
    border-bottom: 2px solid #2f2f2f;

    transform: scale(1.1);
  }
`

const AgeButtonStart = styled.button`
  background-color: rgb(200, 200, 50);
  width: 18%;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top: 5px solid #2f2f2f;
  border-bottom: 5px solid #2f2f2f;

  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
  transition: all 0.5s ease-in-out; 

  &:hover {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top: 2px solid #2f2f2f;
    border-bottom: 2px solid #2f2f2f;

    transform: scale(1.1);
    transition: all 0.5s ease-in-out; 
  }
`

const AgeButton = styled.button`
  background-color: rgb(200, 200, 50);
  width: 18%;

  border-radius: 0%;
  border-top: 5px solid #2f2f2f;
  border-bottom: 5px solid #2f2f2f;

  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
  transition: all 0.5s ease-in-out; 

  &:hover {
    border-top: 2px solid #2f2f2f;
    border-bottom: 2px solid #2f2f2f;

    transform: scale(1.1);
    transition: all 0.5s ease-in-out; 
  }
`

const AgeButtonEnd = styled.button`
  background-color: rgb(200, 200, 50);
  width: 18%;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 5px solid #2f2f2f;
  border-bottom: 5px solid #2f2f2f;

  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
  transition: all 0.5s ease-in-out; 

  &:hover {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 2px solid #2f2f2f;
    border-bottom: 2px solid #2f2f2f;

    transform: scale(1.1);
    transition: all 0.5s ease-in-out; 
  }
`

function AgeBar() {
  const { pathname } = useLocation()

  return (
    <AgeBarContainer>
      <h2>How old are you?</h2>
      <AgeButtonContainer>
        <AgeButtonStart className={(pathname.slice(0, 13) === "/ageContent/1" ? 'activeStart' : '')}>
          <Link to="/ageContent/1" className="link fullwidth">1 YEAR</Link>
        </AgeButtonStart>
        <AgeButton className={(pathname.slice(0, 13) === "/ageContent/2" ? 'active' : '')}>
          <Link to="/ageContent/2" className="link fullwidth">2 YEARS</Link>
        </AgeButton>
        <AgeButton className={(pathname.slice(0, 13) === "/ageContent/3" ? 'active' : '')}>
          <Link to="/ageContent/3" className="link fullwidth">3 YEARS</Link>
        </AgeButton>
        <AgeButton className={(pathname.slice(0, 13) === "/ageContent/4" ? 'active' : '')}>
          <Link to="/ageContent/4" className="link fullwidth">4 YEARS</Link>
        </AgeButton>
        <AgeButtonEnd className={(pathname.slice(0, 13) === "/ageContent/5" ? 'activeEnd' : '')}>
          <Link to="/ageContent/5" className="link fullwidth">5 YEARS</Link>
        </AgeButtonEnd>
      </AgeButtonContainer>
    </AgeBarContainer>
  )
}

export default AgeBar
