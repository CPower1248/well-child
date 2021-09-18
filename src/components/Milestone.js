import { useState } from "react"

import sadFace from "../images/sad-face.png"
import smileyFace from "../images/smiley-face.png"

import styled from "styled-components"

const CategoryContentDiv = styled.div`
  display: flex;
  align-items: center;

  text-align: start;

  margin: 2%;
  margin-bottom: 3%;

  border-bottom: 1px dashed black;

  label {
    font-family: "Klee One";
    font-size: 2rem;

    width: 90%;

    margin-left: 2%;
    margin-bottom: 1%;

    /* border: 1px solid red; */
  }
`

const StickerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 15%;
  height: auto;
  
  font-family: "Gloria Hallelujah";

  img {
    border-radius: 50%;

    margin: 2%;

    box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
  }
`

function Milestone({ milestone }) {
  const [sticker, setSticker] = useState(false)

  const handleSticker = () => {
    setSticker(!sticker)
  }

  return (
    <CategoryContentDiv>
      <StickerBox onClick={handleSticker}>
        {sticker ?
          <img src={smileyFace} alt="Smiley Sticker" /> :
          <img src={sadFace} alt="Sad Sticker" />
        }
      </StickerBox>
      <label>{milestone.content}</label>
  </CategoryContentDiv>
  )
}

export default Milestone
