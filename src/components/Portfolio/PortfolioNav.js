import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../../styles/utils"

const StyledPortfolioNav = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  background-color: white;

  &::-webkit-scrollbar {
    display: none;
  }
  a {
    font-size: var(--font-md);
    font-family: var(--font-mono);
    padding: 1rem 0;
    margin-right: 1.5rem;
    white-space: nowrap;
    color: var(--primary-60);
  }
  .active {
    color: var(--primary);
    text-decoration: underline;
  }
  ${breakpoints.laptop} {
    width: 100%;
    margin: 2rem 0;
    justify-content: space-between;
    overflow-x: scroll;
    a {
      margin: 0 3rem;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const PortfolioNav = ({ categories }) => {
  return (
    <StyledPortfolioNav>
      <Link activeClassName="active" to="/portafolio">
        Todo
      </Link>

      {categories.map(category => (
        <Link
          activeClassName="active"
          key={category.slug}
          to={`/portafolio/${category.slug}`}
        >
          {category.title}
        </Link>
      ))}
    </StyledPortfolioNav>
  )
}

export default PortfolioNav
