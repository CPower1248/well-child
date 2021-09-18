import { useRef, useEffect, useState } from "react" 
import { connect } from "react-redux"

import { getContent } from "../actions"
import Milestone from "./Milestone"

import styled from "styled-components"

const CategoryContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.5);
  width: 90%;

  border-radius: 15px;
  border: 5px double #2f2f2f;
  box-shadow: 0px 15px 25px -4px rgba(30,30,60,0.25);
`

function CategoryContent({ getContent, content, pathname }) {
  const contentRef = useRef(null)

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

  return (
    <CategoryContentContainer ref={contentRef}>
      {content.map(milestone => {
        return <Milestone key={milestone.id} milestone={milestone} />
      })}
    </CategoryContentContainer>
  )
}

const mapStateToProps = state => {
  return {
    content: state.content,
    pathname: state.pathname
  }
}

export default connect(mapStateToProps, { getContent })(CategoryContent)
