import React from "react"
import styled from "styled-components"

const StyledAboutSection = styled.div`
  text-align: center;
  padding: 6.5rem 0;
  display: flex;
  flex-direction: column;
  &:first-of-type {
    h3,
    p {
      text-align: left;
    }
  }
  h3 {
    font-size: var(--font-xl);
  }
  p {
    margin: 3rem 0 4rem;
  }
`

const AboutSection = ({ heading, description, children }) => {
  return (
    <StyledAboutSection>
      <h3>{heading}</h3>
      <p>{description}</p>
      {children}
    </StyledAboutSection>
  )
}

export default AboutSection
