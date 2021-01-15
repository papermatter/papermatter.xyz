import styled from "styled-components"
import { colors, breakpoints } from "../../../styles/Vars"

export const Main = styled.main`
  padding: 0 1.5rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${props => props.backgroundColor || colors.white};

  ${breakpoints.tablet} {
    padding-left: 6em;
    padding-right: 6em;
  }
  ${breakpoints.laptop} {
    padding-left: 10em;
    padding-right: 10em;
  }
  ${breakpoints.laptopL} {
    padding-left: 14em;
    padding-right: 14em;
  }
`
