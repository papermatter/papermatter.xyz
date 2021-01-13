import styled from "styled-components"
import {
  colors,
  breakpoints,
  fontStyleItalic,
  HorizontalDashedBorder,
} from "../../../styles/Vars"

export const StyledContainer = styled.section`
  padding: 5em 2em 4em;
  h3 {
    font-size: 2em;
    margin: 0;
  }
  h4 {
    font-size: 2em;
    ${fontStyleItalic}
  }
  ${breakpoints.tablet} {
    padding: 5em 4em 4em;
  }
  ${breakpoints.laptop} {
    padding: 5em 8em 4em;
  }
  ${breakpoints.laptopL} {
    padding: 5em 12em 4em;
  }
`

export const Label = styled.label`
  font-size: 1em;
  position: absolute;
  color: var(--gray-50);
  transform-origin: top left;
  left: 0;
  transform: translate(0, 16px) scale(1);
  transition: transform 0.1s ease-in-out;
`

export const StyledForm = styled.form`
  padding: 2em 0;
  div {
    ${HorizontalDashedBorder}
    background-position: bottom;
    position: relative;
    margin-bottom: 0.5em;
    &:focus-within {
      textarea {
        height: 5em;
      }
      label {
        transform: translate(0, 0) scale(0.75);
      }
    }
  }
  input,
  textarea {
    padding: 1em 0;
    font-size: 1em;
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
    grid-gap: 1em;
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
    margin-top: 1em;
    margin-bottom: 0.2em;
    height: 1em;
    &:not(:placeholder-shown) {
      height: 5em;
    }
  }
  ${breakpoints.laptop} {
    grid-area: message;
    border-bottom: none !important;
    textarea {
      &:not(:placeholder-shown),
      :focus {
        margin-bottom: -6em;
        padding-bottom: 0.78em;
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
