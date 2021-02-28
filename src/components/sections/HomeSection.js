import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHomeSection = styled.div`
  text-align: left;
  padding: 6.5rem 0;
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 4rem;
    font-size: var(--font-3xl);
  }
  p {
    font-size: var(--font-lg);
    color: var(--primary-80);
  }
  a {
    display: block;
    margin: 2.5rem auto 0;
    padding: 1.5rem;
    color: var(--primary-60);
    text-decoration: underline;
  }
`

const HomeSection = ({ heading, description, children, linkTo, linkLabel }) => {
  return (
    <StyledHomeSection>
      <h3>{heading}</h3>
      {description && <p>{description}</p>}
      {children && children}
      <Link to={linkTo}>{linkLabel}</Link>
    </StyledHomeSection>
  )
}

export default HomeSection
