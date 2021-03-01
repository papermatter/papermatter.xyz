import styled from "styled-components"
import { breakpoints } from "../../../styles/Vars"

export const Main = styled.main`
  padding: 0 1.5rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${props => props.bgColor || "var(--background)"};
  color: ${props =>
    props.bgColor === "var(--primary)"
      ? "var(--background)"
      : "var(--primary)"};

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
