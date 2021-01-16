import styled from "styled-components"
import { Link } from "gatsby"
import { colors, breakpoints } from "../../../styles/Vars"

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
  background: ${props => props.backgroundColor || colors.white};
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
  color: ${props => props.color};
  text-decoration: none;
  &[aria-current] {
    color: ${props => props.activecolor};
    svg {
      fill: ${props => `${props.activecolor} !important`};
    }
  }
`
