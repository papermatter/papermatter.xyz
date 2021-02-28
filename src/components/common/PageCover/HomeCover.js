import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../../styles/Vars"

const StyledPageCover = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  font-size: 1rem;
  ${breakpoints.tablet} {
    margin: 0 -6rem;
    padding: 0;
  }
  ${breakpoints.laptop} {
    margin: 0 -10rem;
  }
  ${breakpoints.laptopL} {
    margin: 0 -14rem;
  }
  h1 {
    font-size: var(--font-xl);
    margin: 1.5rem 0 3rem;
    position: absolute;
    z-index: 3;
    width: 100%;
    color: var(--background);
    ${breakpoints.tablet} {
      padding: 0 6rem;
    }
    ${breakpoints.laptop} {
      padding: 0 10rem;
    }
    ${breakpoints.laptopL} {
      padding: 0 14rem;
    }
  }
  .gradient {
    z-index: 2;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0)
    );
    top: 0;
    height: 100vh;
    width: 100vw;
    margin: 0 -1.5rem;
    ${breakpoints.tablet} {
      margin: 0;
    }
  }
`

const StyledImg = styled(Img)`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0 -1.5rem;
  ${breakpoints.tablet} {
    margin: 0;
  }
`

export default function HomeCover({ cover, heading }) {
  return (
    <StyledPageCover>
      <h1>{heading}</h1>
      <div className="gradient" />
      <StyledImg fluid={cover} />
    </StyledPageCover>
  )
}
