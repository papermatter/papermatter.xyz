import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledCard = styled.div`
  position: relative;
  height: 300px;
  width: calc(50% - 0.5rem);
  margin: 0.5rem 0;
  cursor: pointer;
  &:nth-of-type(2n) {
    transform: translateY(-50%);
  }
  &:nth-of-type(2) {
    height: 150px;
    transform: translateY(0);
  }
  .info {
    z-index: 2;
    background: rgba(0, 0, 0, 0.35);
    color: var(--white);
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
    a {
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
  return (
    <StyledCard>
      <div className="info">
        <p>{image.title}</p>
        <a href={image.client.url}>{image.client.name}</a>
      </div>
      <StyledImg fluid={image.image.childImageSharp.fluid} alt={image.title} />
    </StyledCard>
  )
}
