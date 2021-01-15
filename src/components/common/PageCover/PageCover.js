import React from "react"
import styled from "styled-components"

const StyledPageCover = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  font-size: 1rem;
  div {
    text-transform: lowercase;
    text-decoration: underline;
  }
  h1 {
    font-size: 2.5rem;
    margin: 1.5rem 0 3rem;
  }
  p {
    margin: 0;
  }
`

export default function PageCover({ pageName, heading, description, cover }) {
  return (
    <StyledPageCover>
      {pageName && <div>{pageName}</div>}
      <h1>{heading}</h1>
      {description && <p>{description}</p>}
    </StyledPageCover>
  )
}
