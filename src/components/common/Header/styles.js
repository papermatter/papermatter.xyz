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
  transition: color 0.65s;
  color: var(--primary);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px) saturate(130%);
  transform: ${props =>
    props.isHidden ? "translateY(-100%)" : "translateY(0)"};
  transition: transform 0.15s;

  ${breakpoints.tablet} {
    padding: 1.5rem 2rem ;
  }
`

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  height: 2.75rem;
  width: 2.75rem;
  &:hover {
    background: var(--primary-05);
  }
`

export const StyledNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary);
  background: var(--background);
  svg {
    color: var(--primary);
  }
  .contact-email {
    text-decoration: underline;
    text-align: center;
    font-size: var(--font-md);
    margin-bottom: 6rem;
  }
  nav {
    padding: 0 1.5rem 0;
    margin: auto 0;
    a {
      color: var(--primary);
      font-size: var(--font-3xl);
      margin: 1.5rem 0;
      display: block;
    }
  }
`
