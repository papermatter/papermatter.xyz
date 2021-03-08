import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../../styles/utils"
import PropTypes from "prop-types"

const StyledPageCover = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  text-align: center;
  margin: 0 -1.5rem;
  ${breakpoints.tablet} {
    margin: 0 -6rem;
  }
  ${breakpoints.laptop} {
    margin: 0 -10rem;
  }
  ${breakpoints.laptopL} {
    margin: 0 -14rem;
  }
  h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    z-index: 3;
    font-size: var(--font-3xl);
    font-weight: normal;
    color: var(--background);
    padding: 0 1.5rem;
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
`

const StyledImg = styled(Img)`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  &::after {
    content: "";
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0)
    );
  }
`

export default function HomeCover({ cover, heading }) {
  return (
    <StyledPageCover>
      <StyledImg fluid={cover} />
      <h1>{heading}</h1>
    </StyledPageCover>
  )
}

HomeCover.propTypes = {
  heading: PropTypes.string.isRequired,
}
