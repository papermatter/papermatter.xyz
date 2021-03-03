import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../styles/utils"

const StyledHomeSection = styled.div`
  text-align: left;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  color: var(--text-secondary);
  h3 {
    margin-bottom: 3rem;
    font-size: var(--font-3xl);
  }
  p {
    font-size: var(--font-lg);
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  a {
    display: block;
    font-family: var(--font-mono);
    margin: 2.5rem auto 0;
    padding: 1.5rem;
    text-decoration: underline;
    &:hover {
      opacity: 0.5;
    }
  }
  ${breakpoints.laptop} {
    padding: 16rem 0;
    p {
      font-size: var(--font-md);
    }
  }
`

const HomeSection = ({
  heading,
  description,
  children,
  linkTo,
  linkLabel,
  style = {},
}) => {
  return (
    <StyledHomeSection style={style}>
      <h3>{heading}</h3>
      {description && <p>{description}</p>}
      {children && children}
      <Link to={linkTo}>{linkLabel}</Link>
    </StyledHomeSection>
  )
}

export default HomeSection
