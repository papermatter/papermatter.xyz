import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../styles/utils"
import ArrowDown from "../Icons/ArrowDown"

const StyledArrowsDivider = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4rem auto;
  li {
    padding: 0.75rem;
    line-height: 0.5;
  }
  ${breakpoints.tablet} {
    margin: 6rem auto;
    width: 75%;
  }
`

const ArrowsDivider = () => {
  return (
    <StyledArrowsDivider>
      <li>
        <ArrowDown />
      </li>
      <li>
        <ArrowDown />
      </li>
      <li>
        <ArrowDown />
      </li>
    </StyledArrowsDivider>
  )
}

export default ArrowsDivider
