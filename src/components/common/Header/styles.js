import styled from "styled-components"
import { breakpoints } from "../../../styles/Vars"

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 1000;
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
    padding: 2rem 2rem 1rem;
  }
`

export const StyledDesktopNav = styled.div`
  width: 100%;
  margin-left: 1rem;
  nav {
    display: flex;
    justify-content: flex-start;
    a {
      margin-left: 2rem;
      text-transform: uppercase;
      font-size: var(--font-sm);
      :nth-last-child(1) {
        margin-left: auto;
      }
    }
  }
`
