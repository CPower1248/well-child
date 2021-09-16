import { useRef, useEffect, useState } from "react" 
import { connect } from "react-redux"

import { getContent } from "../actions"
import sadFace from "../images/sad-face.png"
import smileyFace from "../images/smiley-face.png"

import styled from "styled-components"

const CategoryContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.5);
  width: 80%;

  border-radius: 15px;
  border: 5px double #2f2f2f;
  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
`

const CategoryContentButton = styled.div`
  display: flex;
  align-items: center;

  text-align: start;

  margin: 2%;
  margin-bottom: 3%;

  border-bottom: 1px dashed black;

  label {
    font-family: "Klee One";
    font-size: 2rem;

    width: 80%;

    /* border: 1px solid red; */
  }
`
const StickerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 10%;
  height: auto;
  
  font-family: "Gloria Hallelujah";

  img {
    border-radius: 50%;
  }
`


function CategoryContent({ getContent, isFetching, error, content, pathname }) {
  const [sticker, setSticker] = useState(false)

  const contentRef = useRef(null)
  const exists = ["SE","LC","CL","MP","HP"].some(code => pathname.includes(code))

    useEffect(() => {
      if (["SE","LC","CL","MP","HP"].some(code => pathname.includes(code))) {
        getContent(pathname)
      }
    }, [getContent, pathname])

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [])

  const handleSticker = () => {
    setSticker(!sticker)
  }

  return (
    <CategoryContentContainer ref={contentRef}>
      <CategoryContentButton>
        <StickerBox onClick={handleSticker}>
          {sticker ?
            <img src={smileyFace} alt="Smiley Sticker" /> :
            <img src={sadFace} alt="Sad Sticker" />
          }
        </StickerBox>
        <label>Wants to please friends</label>
      </CategoryContentButton>

      <CategoryContentButton>
        <input type="checkbox" />
        <label>Wants to be like friends</label>
      </CategoryContentButton>

      <CategoryContentButton>
        <input type="checkbox" />
        <label>More likely to agree with rules</label>
      </CategoryContentButton>

      <CategoryContentButton>
        <input type="checkbox" />
        <label>Likes to sing, dance, and act</label>
      </CategoryContentButton>

      <CategoryContentButton>
        <input type="checkbox" />
        <label>Is aware of gender</label>
      </CategoryContentButton>

      <CategoryContentButton>
        <input type="checkbox" />
        <label>Can tell what's real and what's make believe</label>
      </CategoryContentButton>

      <CategoryContentButton>
        <input type="checkbox" />
        <label>Shows more independence (for example, may visit a next-door neighbor by themselves [adult supervision is still needed])</label>
      </CategoryContentButton>

      <CategoryContentButton>
        <input type="checkbox" />
        <label>Is sometimes demanding and sometimes very cooperative</label>
      </CategoryContentButton>
    </CategoryContentContainer>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    content: state.content,
    pathname: state.pathname
  }
}

export default connect(mapStateToProps, { getContent })(CategoryContent)
