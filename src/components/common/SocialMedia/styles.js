import styled from "styled-components"
import { breakpoints } from "../../../styles/Vars"

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 18em;
  padding: 0;
  margin: 0 auto;
  text-align: center;
`

export const StyledIconsList = styled.ul`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 85%;
  ${breakpoints.tablet} {
    max-width: 100%;
  }
`
