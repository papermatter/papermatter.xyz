import styled, { keyframes } from 'styled-components';
import { colors, breakpoints } from '../../../styles/Vars';

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
  height: 2em;
  margin: 0 -1px;
  top: 3.8em;
  background: ${colors.white};
  align-items: center;
  h1 {
    display: none;
  }
  .routes-nav {
    margin-left: 1em;
    margin-top: -.4em;
  }
  ${breakpoints.tablet} {
    justify-content: start;
    align-items: center;
    height: 3em;
    h1 {
      display: block;
      font-size: 1.5em !important;
      position: absolute;
      right: .5em;
      margin: 0 !important;
      animation: ${slideTop} .3s both;
    }
  }
  a {
    color: ${colors.gray};
    text-decoration: none;
    text-transform: uppercase;
    font-size: .5em;
    &:not(:first-child){
      :before {
        content: '/';
      }
    }
  }
  ${breakpoints.tablet} {
    top: 5em;
    a {
      font-size: .75em;
    }
  }
 
`



