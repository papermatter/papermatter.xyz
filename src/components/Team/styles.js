import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/Vars'

export const StyledTeam = styled.div`
  padding: 5em 0;
  position: relative;
  h3 {
    font-size: 2em;
    margin-bottom: 8px;
  }
  h5 {
    color: ${colors.darkGray};
    font-size: 1em;
  }
  button {
    background: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
    &[disabled] {
      opacity: .5;
    }
  }
  ${breakpoints.laptop}{
    .nav-bar {
      h4 {
        margin-left: 1.1em;
      }
      position: absolute;
      top: 30%;
      left: 6vw;
      transform: translateY(-50%);
      z-index: 1000;
    }
  }
`

export const StyledFotoContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: white;
  margin: 2em 0;
`

export const StyledTeamInfo = styled.div`
  ${breakpoints.tablet} {
    h4 {
      font-size: 2em;
      position: absolute;
      left: 4.5vw;
      top: 53.5%;
      transform: translateY(-50%);
      max-width: 6em;
    }
    .nameContainer {
      position: absolute;
      left: 56vw;
      top: 57%;
      max-width: 11em;
      transform: translateY(-50%);
      h3{
        font-size: 2em;
      }
    }
  }
  ${breakpoints.laptop} {
    h4 {
      font-size: 2.5em;
      left: 6vw;
      top: 50%;
    }
    .nameContainer {
      left: 50vw;
      top: 54%;
      max-width: 11em;
      h3{
        font-size: 2.5em;
      }
    }
  }
  ${breakpoints.laptopL} {
    h4 {
      font-size: 2.5em;
      left: 10vw;
      top: 50%;
    }
    .nameContainer {
      left: 50vw;
      top: 54%;
      max-width: 11em;
      h3{
        font-size: 2.5em;
      }
    }
  }
`