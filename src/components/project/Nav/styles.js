import styled, { keyframes } from "styled-components"
import { colors, breakpoints } from "../../../styles/Vars"

const slideTop = keyframes`
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
`

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  height: 2rem;
  margin: 0 -1px;
  top: 3.8rem;
  background: ${colors.white};
  align-items: center;
  h1 {
    display: none;
  }
  .routes-nav {
    margin-left: 1rem;
    margin-top: -0.4rem;
  }
  ${breakpoints.tablet} {
    justify-content: start;
    align-items: center;
    height: 3rem;
    h1 {
      display: block;
      font-size: 1.5rem !important;
      position: absolute;
      right: 0.5rem;
      margin: 0 !important;
      animation: ${slideTop} 0.3s both;
    }
  }
  a {
    color: ${colors.gray};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.5rem;
    &:not(:first-child) {
      :before {
        content: "/";
      }
    }
  }
  ${breakpoints.tablet} {
    top: 5rem;
    a {
      font-size: var(--font-xs);
    }
  }
`
