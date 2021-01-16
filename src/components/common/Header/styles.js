import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../../../styles/Vars"

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0.9em 0.5em 1.9em;
  position: fixed;
  z-index: 10000;
  height: 3.8em;
  top: 0;
  background: ${props =>
    props.bgColor === "black" ? "var(--black)" : "var(--white)"};
  color: ${props =>
    props.bgColor === "black" ? "var(--white)" : "var(--black)"};
  svg {
    color: ${props =>
      props.bgColor === "black" ? "var(--white)" : "var(--black)"};
  }
  nav {
    display: block;
  }
  ${breakpoints.tablet} {
    height: 5em;
    padding: 2em 2em 0.5em;
  }
`

export const StyledDesktopNav = styled.div`
  width: 100%;
  margin-left: 2em;
  nav {
    display: flex;
    justify-content: flex-start;
    a {
      :nth-last-child(1) {
        margin-left: auto;
      }
      margin-left: 2.5em;
      text-transform: uppercase;
      font-size: var(--font-sm);
    }
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
