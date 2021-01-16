import styled from "styled-components"
import { breakpoints, HorizontalDashedBorder } from "../../../styles/Vars"

export const StyledContainer = styled.section`
  padding: 5rem 2rem 4rem;
  h4 {
    font-size: var(--font-xl);
    margin: 0.5rem 0;
    text-align: center;
  }
  ${breakpoints.tablet} {
    padding: 5rem 4rem 4rem;
  }
  ${breakpoints.laptop} {
    padding: 5rem 8rem 4rem;
  }
  ${breakpoints.laptopL} {
    padding: 5rem 12rem 4rem;
  }
`

export const Label = styled.label`
  font-size: var(--font-md);
  position: absolute;
  color: var(--gray-50);
  transform-origin: top left;
  left: 0;
  transform: translate(0, 16px) scale(1);
  transition: transform 0.1s ease-in-out;
`

export const StyledForm = styled.form`
  margin-top: 4rem;
  padding: 2rem 0;
  div {
    ${HorizontalDashedBorder}
    background-position: bottom;
    position: relative;
    margin-bottom: 0.5em;
    &:focus-within {
      textarea {
        height: 5rem;
      }
      label {
        transform: translate(0, 0) scale(0.75);
      }
    }
  }
  input,
  textarea {
    padding: 1rem 0;
    font-size: var(--font-xl);
    width: 100%;
    background: transparent;
    border: none;
    outline: 0;
    &:not(:placeholder-shown) + ${Label} {
      transform: translate(0, 0) scale(0.75);
    }
  }
  ${breakpoints.laptop} {
    display: grid;
    grid-template-areas:
      "name email message"
      ". tel message"
      ". . btn";
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    #nameContainer {
      grid-area: name;
    }
    #emailContainer {
      grid-area: email;
    }
    #telContainer {
      grid-area: tel;
    }
  }
`
export const StyledTextarea = styled.div`
  textarea {
    resize: none;
    padding-top: 0;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    height: 1rem;
    &:not(:placeholder-shown) {
      height: 5rem;
    }
  }
  ${breakpoints.laptop} {
    grid-area: message;
    border-bottom: none !important;
    textarea {
      &:not(:placeholder-shown),
      :focus {
        margin-bottom: -6rem;
        padding-bottom: 0.78rem;
      }
    }
  }
`

export const StyledButton = styled.button`
  margin-top: 4em;
  border: none;
  ${HorizontalDashedBorder}
  background-position: bottom;
  padding: 0.5em 1.5em;
  transition: 0.15s;
  grid-area: btn;
  cursor: pointer;
  &:focus,
  :hover {
    outline: none;
    /* from dashed to solid */
    background-image: linear-gradient(to right, var(--gray-25), var(--gray-25));
  }
  ${breakpoints.laptop} {
    margin-top: 0;
    width: 35%;
    justify-self: end;
    padding: 0.5em 0;
  }
`
