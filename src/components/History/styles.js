import styled from 'styled-components'
import { breakpoints } from '../../styles/Vars'

export const StyledHistoryDiv = styled.div`
  display: grid;
  grid-template-columns: .25fr 1fr;
  margin: 2em 0;
  grid-column-gap: 1em;
  width: 100%;
  h6 {
    font-size: 1em;
    border-right: 2px solid black;
    margin: 3px 0 auto;
  }
  p {
    margin: 0;
  }
  ${breakpoints.laptop} {
    width: 50%;
    margin-left: ${props => `${props.index*10}%`};
  }
`


export const StyledHistoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0;
  ${breakpoints.laptop} {
    margin: auto;
    width: 70%;
  }
`