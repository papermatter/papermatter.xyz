import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors, breakpoints } from "../../styles/Vars"

const StyledPortfolioNav = styled.div`
  position: sticky;
  top: 3.5em;
  z-index: 1000;
  nav {
    display: grid;
    grid-auto-flow: column;
    overflow-x: scroll;
    margin: 0 -2em;
    background: ${colors.black};
    &:after,
    :before {
      content: "";
      width: 2em;
    }
    ${breakpoints.laptop} {
      margin: 0;
      &:after,
      :before {
        content: "";
        width: 0;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
    a {
      color: white;
      text-align: center;
      font-size: var(--font-xl);
      padding: 1em 1.5em;
      text-transform: uppercase;
      white-space: nowrap;
      border-bottom: 1px solid ${colors.gray};
    }
    .active {
      margin-bottom: -1px;
      border-bottom: 3px solid ${colors.white};
    }
  }
  ${breakpoints.tablet} {
    top: 5em;
  }
`

export default function PortfolioNav({
  categories,
  handleTabClick,
  activeCategory,
}) {
  return (
    <StyledPortfolioNav>
      <nav>
        <Link
          to={`/portafolio?category=todo`}
          onClick={() => handleTabClick("todo")}
          className={
            !activeCategory || activeCategory === "todo" ? "active" : ""
          }
        >
          Todo
        </Link>
        {categories.map((item, index) => (
          <Link
            to={`/portafolio?category=${item.node.slug}`}
            partiallyActive={true}
            activeClassName="active"
            key={index}
            onClick={() => handleTabClick(item.node.slug)}
            className={item.node.slug === activeCategory ? "active" : ""}
          >
            {item.node.short_name ? item.node.short_name : item.node.name}
          </Link>
        ))}
      </nav>
    </StyledPortfolioNav>
  )
}
