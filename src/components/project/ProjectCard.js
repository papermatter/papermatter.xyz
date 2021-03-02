import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ArrowRight from "../Icons/ArrowRight"
import { Link } from "gatsby"

const StyledProjectCard = styled(Link)`
  width: 100%;
  .info {
    padding: 1.5rem 0;
    position: relative;
    h3 {
      font-size: var(--font-xl);
      margin-bottom: 0.25rem;
    }
    p {
      color: var(--text-tertiary);
    }
    span {
      line-height: 0.5;
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
