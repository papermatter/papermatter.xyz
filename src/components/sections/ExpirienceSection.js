import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../styles/utils"
import ClientsSlider from "./ClientsSlider"

const StyledAboutSection = styled.div`
  text-align: left;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 3rem;
    font-size: var(--font-3xl);
  }
  p {
    font-size: var(--font-lg);
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 6rem;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  li {
    border: 1px solid var(--element-tertiary);
    width: 100%;
    height: 10rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2.5rem;
    p {
      margin: 0;
      font-size: 4rem;
      font-weight: bold;
    }
    span {
      font-size: var(--font-lg);
      color: var(--text-tertiary);
    }
    ${breakpoints.tablet} {
      width: 12rem;
    }
    ${breakpoints.laptop} {
      width: 16rem;
    }
  }
` 

const ExpirienceSection = ({ heading, description, clients  }) => {
  return (
    <StyledAboutSection>
      <h3>{heading}</h3>
      <ul>
        <li><p>+50</p><span>Proyectos</span></li>
        <li><p>+20</p><span>Clientes Satisfechos</span></li>
        <li><p>+5</p><span>Años de experiencia</span></li>
      </ul>
      <p>{description}</p>
      
      <ClientsSlider clients={clients}  />
    </StyledAboutSection>
  )
}

export default ExpirienceSection
