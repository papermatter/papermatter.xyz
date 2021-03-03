import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../styles/utils"

const StyledProjectInfo = styled.ul`
  padding: 10rem 0;
  display: flex;
  flex-wrap: wrap;
  li {
    flex: 0 0 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    span {
      font-family: var(--font-mono);
      color: var(--text-tertiary);
      font-size: var(--font-sm);
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--text-secondary);
      font-size: var(--font-lg);
    }
  }
  ${breakpoints.tablet} {
    li {
      flex: 0 0 45%;
      padding: 2rem 0;
    }
    li:nth-of-type(2n) {
      flex: 0 0 55%;
    }
  }
`

const ProjectInfo = ({ description, client, location, status }) => {
  return (
    <StyledProjectInfo>
      <li>
        <span>Arquitecto/ Firma</span>
        <p>{client.name}</p>
      </li>
      <li>
        <span>Ubicación</span>
        <p>{location}</p>
      </li>
      <li>
        <span>Estatus</span>
        {status && <p>{status}</p>}
      </li>
      <li>
        <span>Descriptión</span>
        <p>{description}</p>
      </li>
    </StyledProjectInfo>
  )
}

export default ProjectInfo
