import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ImagesSlider from "./ImagesSlider"
import { breakpoints } from "../../styles/utils"
import { useMediaQuery } from "../../lib/hooks/use-media-queries"

const StyledExploreOurWork = styled.ul`
  display: flex;
  position: relative;
  color: var(--text-secondary);
  transform: translateX(-35rem);
  overflow-x: hidden;
  width: calc(100vw + 25rem);
  ${breakpoints.laptopL} {
    width: calc(100vw + 21rem);
    margin: 12rem 0;
  }
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
const StyledMobileSection = styled.div`
  text-align: left;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  color: var(--text-secondary);
  h3 {
    margin-bottom: 3rem;
    font-size: var(--font-3xl);
  }
  a {
    display: block;
    font-family: var(--font-mono);
    margin: 2.5rem auto 0;
    padding: 1.5rem;
    text-decoration: underline;
    &:hover {
      opacity: 0.5;
    }
  }
  ${breakpoints.laptop} {
    padding: 16rem 4rem;
    a {
      padding: 1.5rem;
      border: 1px solid var(--element-tertiary);
      width: max-content;
    }
  }
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
`

const ExploreOurWorkSection = ({ heading, images }) => {
  const isTablet = useMediaQuery(1023)

  if (isTablet) {
    return (
      <StyledMobileSection>
        <h3>{heading}</h3>
        <ImagesSlider images={images.slice(0, 2)} initialPosition="-150px" />
        <ImagesSlider images={images.slice(2, 4)} />
        <Link to="/portafolio">Ir a trabajos</Link>
      </StyledMobileSection>
    )
  }

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
        <Link to="/portafolio">Ir a trabajos</Link>
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
