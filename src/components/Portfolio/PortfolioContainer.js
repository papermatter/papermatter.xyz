import React from "react"
import styled from "styled-components"
import PortfolioCard from './PorfolioCard'

const StyledPortafolioContainer = styled.div`
  padding: 2rem 0 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PortfolioContainer = ({ projects }) => {
  return (
    <StyledPortafolioContainer>
      {projects.map(project => (
        <PortfolioCard project={project} key={project.id} />
      ))}
    </StyledPortafolioContainer>
  )
}

export default PortfolioContainer
