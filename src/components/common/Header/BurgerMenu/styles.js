import styled from "styled-components"

export const Div = styled.div`
  position: fixed;
  background: var(--white);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2em 8vh;
  transition: 0.2s;
  .contact-email {
    text-decoration: underline;
    text-align: center;
    margin-bottom: 8rem;
  }
  nav {
    margin: auto 0;
    a {
      color: var(--black);
      font-size: 2rem;
      margin: 1.5em 0;
      display: block;
      text-transform: uppercase;
      position: relative;
      &[aria-current] {
        color: var(--black);
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        color: var(--gray-25);
      }
    }
  }
`

export const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
`

export const Header = styled.div`
  padding: 1em 0;
  margin: 0 -1.1em 0 -0.1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 3.8em;
`
