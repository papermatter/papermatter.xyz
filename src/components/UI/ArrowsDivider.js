import React from "react"
import styled from "styled-components"
import ArrowDown from "../Icons/ArrowDown"

const StyledArrowsDivider = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 6rem auto;
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
