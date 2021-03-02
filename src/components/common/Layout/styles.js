import styled from "styled-components"
import { breakpoints } from "../../../styles/utils"

export const Main = styled.main`
  padding: 0 1.5rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: var(--background);
  color: var(--primary);
  ${breakpoints.tablet} {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  ${breakpoints.laptop} {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  ${breakpoints.laptopL} {
    padding-left: 14rem;
    padding-right: 14rem;
  }
`
