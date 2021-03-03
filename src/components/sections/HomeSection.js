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
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    &.align-center {
      text-align: center;
      .info {
        flex-direction: column;
      }
      p {
        width: 60%;
        margin: 0 auto 4rem;
      }
    }
    p {
      margin: 0;
      flex: 0 0 60%;
      font-size: var(--font-md);
    }
    a {
      margin: 0;
      padding: 1.5rem;
      border: 1px solid var(--element-tertiary);
      width: max-content;
    }
  }
`

const HomeSection = ({
  heading,
  description,
  linkTo,
  linkLabel,
  alignCenter = false,
}) => {
  return (
    <StyledHomeSection className={alignCenter ? "align-center" : ""}>
      <h3>{heading}</h3>
      <div className="info">
        {description && <p>{description}</p>}
        <Link to={linkTo}>{linkLabel}</Link>
      </div>
    </StyledHomeSection>
  )
}

export default HomeSection
