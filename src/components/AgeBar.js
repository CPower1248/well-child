import styled from "styled-components"



// .age-bar {
//   display: flex;
//   flex-flow: row;
//   justify-content: center;
//   align-items: center;
//   width: 95%;
//   height: 15%;
//   margin: 1%;
//   padding: 1%;

//   /* border: 1px solid blue; */
// }

// .age-1 {
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
// }

// .age-5 {
//   border-top-right-radius: 10px;
//   border-bottom-right-radius: 10px;
// }

// .age-1, .age-2, .age-3, .age-4, .age-5 {
//   width: 20%;
//   height: 60%;

//   border-top: 5px solid black;
//   border-bottom: 5px solid black;
//   border-left: 1px solid black;
//   border-right: 1px solid black;
// }

// .selector {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .selector:hover {
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: black;
//   color: white;
// }

function AgeBar() {
  return (
    <div className="age-bar">
      <div className="age-1 selector">1yo</div>
      <div className="age-2 selector">2yo</div>
      <div className="age-3 selector">3yo</div>
      <div className="age-4 selector">4yo</div>
      <div className="age-5 selector">5yo</div>
    </div>
  )
}

export default AgeBar
