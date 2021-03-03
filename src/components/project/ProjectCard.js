import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ArrowRight from "../Icons/ArrowRight"
import { Link } from "gatsby"
import { breakpoints } from "../../styles/utils"

const StyledProjectCard = styled(Link)`
  flex: 0 0 100%;
  margin: 0 0 2rem;
  height: min-content;
  .info {
    padding: 1.5rem 0;
    position: relative;
    color: var(--text-tertiary);
    h3 {
      font-size: var(--font-xl);
      margin-bottom: 0.75rem;
      color: var(--text-primary);
    }
    span {
      line-height: 0.5;
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  ${breakpoints.tablet} {
    flex: 0 0 49%;
    &:nth-child(2n) {
      transform: translateY(25%);
    }
    .info h3 {
      font-size: var(--font-lg);
    }
    .info p {
      font-size: var(--font-sm);
    }
  }
`

const StyledImg = styled(Img)`
  position: absoulte;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 22.5rem;
`

const ProjectCard = ({ project }) => {
  return (
    <StyledProjectCard to={`/portafolio/${project.slug}`}>
      <StyledImg
        fluid={project.cover.childImageSharp.fluid}
        alt={project.title}
      />
      <div className="info">
        <h3>{project.title}</h3>
        <p>{project.location}</p>
        <span>
          <ArrowRight />
        </span>
      </div>
    </StyledProjectCard>
  )
}

export default ProjectCard
