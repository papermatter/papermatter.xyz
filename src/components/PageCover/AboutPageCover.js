import React from "react"
import styled from "styled-components"

import { ArrowDownIcon } from "../Icons"
import { breakpoints, colors } from "../../styles/Vars"

const StyledPageCover = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  p {
    margin: 1em auto;
    font-size: 1em;
    text-align: center;
    color: ${colors.darkGray};
    max-width: 20em;
  }
  a {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 3em;
  }
  ${breakpoints.tablet} {
    margin: 0 -6em;
    p {
      width: 20em;
    }
    div > h3 {
      font-size: 3em;
    }
  }
  ${breakpoints.laptop} {
    margin: 0 -10em;
  }
  ${breakpoints.laptopL} {
    margin: 0 -14em;
  }
`

export default function AboutPageCover({ children, scrollTo }) {
  return (
    <StyledPageCover>
      {children}
      <a href={`#${scrollTo}`}>
        <ArrowDownIcon size="1.5em" />
      </a>
    </StyledPageCover>
  )
}
