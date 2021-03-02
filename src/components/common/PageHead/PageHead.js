import React from "react"
import styled from "styled-components"

const StyledPageHead = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  div {
    text-transform: capitalize;
    font-size: var(--font-md);
    font-family: var(--font-mono);
    color: var(--text-primary);
  }
  h1 {
    font-size: var(--font-3xl);
    margin: 1.5rem 0 3rem;
    font-weight: normal;
  }
  p {
    font-size: var(--font-lg);
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }
`

export default function PageHead({
  pageName,
  heading,
  description,
  style = {},
}) {
  return (
    <StyledPageHead style={style}>
      {pageName && <div>{pageName}</div>}
      <h1>{heading}</h1>
      {description && <p>{description}</p>}
    </StyledPageHead>
  )
}
