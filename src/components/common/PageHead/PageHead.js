import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../../styles/utils"

const StyledPageHead = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  color: var(--text-secondary);
  div {
    text-transform: capitalize;
    font-size: var(--font-md);
    font-family: var(--font-mono);
  }
  h1 {
    font-size: var(--font-3xl);
    margin: 1.5rem 0 3rem;
    font-weight: normal;
  }
  p {
    font-size: var(--font-lg);
    line-height: 1.5;
    margin: 0;
  }
  ${breakpoints.laptop} {
    p {
      font-size: var(--font-md);
      width: 60%;
      margin: 0 auto;
    }
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
