import React from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"

const StyledProjectsCardContainer = styled.div`
  padding: 2rem 0 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectCardsContainer = ({ projects }) => {
  return (
    <StyledProjectsCardContainer>
      {projects.map(project => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </StyledProjectsCardContainer>
  )
}

export default ProjectCardsContainer
