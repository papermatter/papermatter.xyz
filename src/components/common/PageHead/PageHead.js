import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../../styles/utils"

const StyledPageHead = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  color: var(--text-secondary);
  div {
    text-transform: capitalize;
    font-size: var(--font-md);
    font-family: var(--font-mono);
  }
  h1 {
    font-size: var(--font-3xl);
    margin: 1rem 0 3rem;
    font-weight: normal;
  }
  p {
    font-size: var(--font-lg);
    line-height: 1.5;
    margin: 0;
  }
  .breadcrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    p,
    a {
      width: max-content;
      margin: 0.5rem 0;
      &:not(:first-child):before {
        content: "/";
        margin: 0 1rem;
      }
    }
    a:hover {
      opacity: 0.5;
    }
  }
  ${breakpoints.laptop} {
    h1 {
      width: 90%;
      margin: 1.5rem auto 3rem;
    }
    p {
      font-size: var(--font-md);
      width: 60%;
      margin: 0 auto;
    }
  }
`

export default function PageHead({
  pageName,
  heading,
  breadcrumbs = [],
  description,
  style = {},
}) {
  return (
    <StyledPageHead style={style}>
      <div className="breadcrumbs">
        {pageName && <p>{pageName}</p>}
        {breadcrumbs.length > 0 &&
          breadcrumbs.map(link => (
            <Link key={link.href} to={link.href}>
              {link.title}
            </Link>
          ))}
      </div>
      <h1>{heading}</h1>
      {description && <p>{description}</p>}
    </StyledPageHead>
  )
}
