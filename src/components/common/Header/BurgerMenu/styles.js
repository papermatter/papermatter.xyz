import styled from "styled-components"

export const Div = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  color: var(--primary);
  background: var(--background);
  svg {
    color: var(--primary);
  }
  .contact-email {
    text-decoration: underline;
    text-align: center;
    margin-bottom: 8rem;
  }
  nav {
    padding: 0 2rem 0;
    margin: auto 0;
    a {
      color: var(--primary);
      font-size: 2rem;
      margin: 1.5em 0;
      display: block;
      text-transform: uppercase;
      position: relative;
    }
  }
`

export const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
`

export const Header = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
