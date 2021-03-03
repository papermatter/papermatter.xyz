import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledExploreOurWork = styled.ul`
  display: flex;
  position: relative;
  color: var(--text-secondary);
  transform: translateX(-35rem);
  li {
    height: 100vh;
    min-width: 30rem;
    background: lightgray;
    margin-right: 1rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    min-width: 40rem;
    padding: 0 5rem;
  }
  h3 {
    font-size: var(--font-3xl);
    margin-bottom: 3rem;
  }
  a {
    font-family: var(--font-mono);
    text-decoration: underline;
    padding: 1.5rem;
    border: 1px solid var(--element-tertiary);
    width: max-content;
  }
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
`

const ExploreOurWorkSection = ({ heading, images }) => {
  return (
    <StyledExploreOurWork>
      <li>
        <StyledImg
          fluid={images[0].image.childImageSharp.fluid}
          alt={images[0].image.name}
        />
      </li>
      <li className="info">
        <h3>{heading}</h3>
        <Link to="/portfolio">Ir a trabajos</Link>
      </li>
      <li>
        <StyledImg
          fluid={images[1].image.childImageSharp.fluid}
          alt={images[1].image.name}
        />
      </li>
      <li>
        <StyledImg
          fluid={images[2].image.childImageSharp.fluid}
          alt={images[2].image.name}
        />
      </li>
    </StyledExploreOurWork>
  )
}

export default ExploreOurWorkSection
