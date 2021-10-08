import styled from "styled-components"

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

function Modal() {
  return (
    <ModalBG>
      <ModalContent>
        <button>close</button>
      </ModalContent>
    </ModalBG>
  )
}

export default (Modal)
