import React from "react"
import styled from "styled-components"

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
    margin-bottom: 1.5rem;
  }
` 

const AboutSection = ({ heading, description, style = {}  }) => {
  return (
    <StyledAboutSection style={style}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </StyledAboutSection>
  )
}

export default AboutSection
