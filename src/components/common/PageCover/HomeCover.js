import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledPageCover = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  font-size: 1rem;
  h1 {
    font-size: var(--font-xl);
    margin: 1.5rem 0 3rem;
    position: absolute;
    z-index: 3;
    color: var(--white);
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
  }
`

const StyledImg = styled(Img)`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0 -1.5rem;
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
