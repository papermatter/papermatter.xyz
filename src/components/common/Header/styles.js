import styled from "styled-components"
import { breakpoints, responsiveSectionPadding } from "../../../styles/utils"

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem 1rem 1.5rem;
  z-index: 1000;
  transition: color 0.65s;
  color: var(--primary);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px) saturate(130%);
  transform: ${props =>
    props.isHidden ? "translateY(-100%)" : "translateY(0)"};
  transition: transform, color, background-color, 0.15s;
  ${breakpoints.tablet} {
    padding: 1.5rem 2rem;
  }
  ${breakpoints.laptop} {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  @supports not (backdrop-filter: none) {
    .sticky-nav {
      backdrop-filter: none;
      background: var(--background);
    }
  }
  &.no-background {
    backdrop-filter: none;
    background: transparent;
    color: var(--background);
    svg {
      fill: var(--background);
    }
  }
  .contact-link {
    font-family: var(--font-mono);
    text-decoration: underline;
    font-size: var(--font-sm);
    margin-left: auto;
    margin-right: 2rem;
    display: none;
    ${breakpoints.laptop} {
      display: block;
    }
  }
`

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  height: 2.75rem;
  width: 2.75rem;
  line-height: 0.5;
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
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary);
  background: var(--background);

  .nav-header {
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.75rem 1rem 1.5rem;
    ${breakpoints.tablet} {
      padding: 1.5rem 2rem;
    }
    ${breakpoints.laptop} {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
  .contact-email {
    text-decoration: underline;
    text-align: center;
    font-size: var(--font-md);
    color: var(--text-secondary);
    margin-bottom: 6rem;
    font-family: var(--font-mono);
  }
  nav {
    padding: 0 1.5rem 0;
    margin: auto 0;
    ${responsiveSectionPadding}
    a {
      color: var(--primary);
      font-size: var(--font-3xl);
      margin: 2rem 0;
      display: block;
      position: relative;
      &:hover {
        opacity: 0.5;
      }
      &::after {
        content: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"  ><path d="M21 11.84l-6.66 6.85-1.42-1.42 4.28-4.4H5v-2.05h12.2l-.95-.97-.48-.5-2.85-2.92L14.35 5l4.23 4.35.49.5L21 11.84z" /></svg>');
        position: absolute;
        height: 24px;
        width: 24px;
        height: 100%;
        right: 0;
        pointer-events: none;
      }
      ${breakpoints.laptop} {
        font-size: var(--font-2xl);
      }
    }
  }
`
