import { useRef, useEffect } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import { toggleModal } from "../actions"

import smiley from "../images/sad-face.png"

//modal
const ModalBG = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	position: absolute;
	top: 0;	
`

const ModalContent = styled.div`
  display: flex;
  flex-flow: column;

  width: 70%;
	height: 50%;
	background-color: rgba(0, 0, 0, 0.975);

	border-radius: 15px;
  border: 4px double rgb(100, 200, 255);
`

const CloseButton = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

  height: 10%;

  /* border: 1px solid red; */

  button {
    color: rgb(100, 200, 255);
    font-weight: bold;
    font-size: 1rem;

    margin-right: 2%;

    background: none;
    border: none;

    transition: all 0.5s ease-in-out; 

    &:hover {
      transform: scale(1.3);
      transition: all 0.5s ease-in-out; 

      cursor: pointer;
    }
  }
`

const MenuOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  /* border: 1px solid blue; */
`

const Option = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  text-align: center;

  border: 1px solid blue;
  border-radius: 15px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out; 

    cursor: pointer;
  }

  img {
    border: 1px solid red;
  }

  span {
    color: rgb(100, 200, 255);

    border: 1px solid red;
  }
`

function Modal({ toggleModal, modal }) {
  const modalRef = useRef(null)

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [])

  const handleToggleModal = modal => {
    toggleModal(modal)
  }

  return (
    <ModalBG ref={modalRef}>
      <ModalContent>
        <CloseButton>
          <button onClick={handleToggleModal}>X</button>
        </CloseButton>
        <MenuOptions>
          <Option>
            <img src={smiley} alt="Your Account" />
            <span>Your Account</span> 
          </Option>
          <Option>
            <img src={smiley} alt="About Us" />
            <span>About Us</span> 
          </Option>
          <Option>
            <img src={smiley} alt="Contect Info" />
            <span>Contact Info</span> 
          </Option>
        </MenuOptions>
      </ModalContent>
    </ModalBG>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps, { toggleModal })(Modal)
