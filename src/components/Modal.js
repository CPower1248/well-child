import styled from "styled-components"
import { connect } from "react-redux"

import { toggleModal } from "../actions"

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
  justify-content: center;
  align-items: center;

  width: 70%;
	height: 50%;
	background-color: rgba(0, 0, 0, 0.975);

	border-radius: 15px;
  border: 3px double cyan;
`

function Modal({ toggleModal, modal }) {
  const handleToggleModal = modal => {
    toggleModal(modal)
  }

  return (
    <ModalBG>
      <ModalContent>
        <button onClick={handleToggleModal}>close</button>
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
