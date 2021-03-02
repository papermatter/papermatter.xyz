import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import ArrowRight from '../Icons/ArrowRight'
import { Link } from 'gatsby'

const StyledPortfolioCard = styled(Link)`
  width: 100%;
  .info {
    padding: 1.5rem 0;
    position: relative;
    h3 {
      font-size: var(--font-xl);
      margin-bottom: .25rem;
    }
    p {
      color: var(--text-tertiary);
    }
    span {
      line-height: .5;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
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

const PorfolioCard = ({project}) => {
  return (
    <StyledPortfolioCard to={`/portafolio/${project.slug}`}>
      <StyledImg fluid={project.cover.childImageSharp.fluid} alt={project.title}/>
      <div className="info">
        <h3>
          {project.title}
        </h3>
        <p>
          {project.location}
        </p>
        <span >
          <ArrowRight />
        </span>
      </div>
    </StyledPortfolioCard>
  )
}

export default PorfolioCard
