import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHomeSection = styled.div`
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
    margin-bottom: 4rem;
    font-size: 2.5rem;
  }
  a {
    margin-top: 4rem;
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
