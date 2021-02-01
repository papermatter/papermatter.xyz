import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledPortfolioNav = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    font-size: var(--font-md);
    padding: 1rem 0;
    margin-right: 1.5rem;
    white-space: nowrap;
    color: var(--gray-50);
  }
  .active {
    color: var(--black);
    text-decoration: underline;
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
