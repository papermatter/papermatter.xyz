import styled from 'styled-components'
import {colors} from '../../../../styles/Vars'

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
  transition: .2s;
  nav {
    a {
      color: var(--black);
      font-size: 1.5em;
      font-weight:800;
      margin: 1em 0;
      display: block;
      text-transform: uppercase;
      &[aria-current] {
        color: ${colors.black}
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
  margin: 0 -1.1em 0 -.1em;
  display: flex; 
  justify-content: space-between;
  align-items: flex-start;
  height: 3.8em;
`