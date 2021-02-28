import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Lightbox from "../UI/Lightbox"

const StyledCard = styled.div`
  position: relative;
  height: 300px;
  width: calc(50% - 0.5rem);
  margin: 0.5rem 0;
  cursor: pointer;
  /* &:nth-of-type(2n) {
    transform: translateY(-50%);
  }
  &:nth-of-type(2) {
    height: 150px;
    transform: translateY(0);
  } */
  .info {
    z-index: 2;
    background: rgba(0, 0, 0, 0.35);
    color: var(--background);
    position: absolute;
    padding: 1.5rem 1rem;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
    p {
      margin: 0.2rem 0;
      font-size: 1.75rem;
    }
    .client {
      margin: 0;
      font-size: 1.2rem;
    }
  }
`

const StyledImg = styled(Img)`
  position: absoulte;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
`

export default function PortfolioImageCard({ image }) {
  const [isShowed, setIsShowed] = useState(false)

  const handleCloseClick = () => {
    setIsShowed(false)
  }

  return (
    <StyledCard>
      <div className="info" onClick={() => setIsShowed(true)}>
        <p>{image.title}</p>
        <p className="client">{image.client.name}</p>
      </div>
      <StyledImg fluid={image.image.childImageSharp.fluid} alt={image.title} />
      {isShowed && (
        <Lightbox image={image} handleCloseClick={handleCloseClick} />
      )}
    </StyledCard>
  )
}
