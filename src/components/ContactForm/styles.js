import styled from 'styled-components';
import { colors, breakpoints, fontStyleItalic } from '../../styles/Vars';

export const StyledContainer = styled.section`
  background: ${colors.gray};
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

export const StyledContactInfo = styled.div`
  h6 {
    color: ${colors.darkGray};
    margin: 0;
    font-size: .75em;
  }
  p {
    margin: 0 0 1em;
  }
`

export const Label = styled.label`
  ${fontStyleItalic}
  font-size: 1em;
  position: absolute;
  transform-origin: top left;
  left: 0;
  transform: translate(0, 16px) scale(1);
  transition: all 0.1s ease-in-out;
`

export const StyledForm = styled.form`
  padding: 2em 0;
  div {
    border-bottom: 1px solid ${colors.darkGray};
    position: relative;
    margin-bottom: .5em;
    &:focus-within {
      textarea {
        height: 5em;
      }
      label {
        transform: translate(0, 0) scale(.75);
      }
    }
  }
  input, textarea {
    padding: 1em 0 .5em 0;
    font-size: 1em;
    width: 100%;
    background: transparent;
    border: none;
    outline: 0;
    &:not(:placeholder-shown) + ${Label}{
      transform: translate(0, 0) scale(.75);
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
    margin-bottom: .2em;
    height: 1em;
    &:not(:placeholder-shown) {
      height: 5em;
    }
  }
  ${breakpoints.laptop} {
    grid-area: message;
    border-bottom: none !important;
    textarea {
      border-bottom: 1px solid ${colors.darkGray};
      &:not(:placeholder-shown), :focus {
        margin-bottom: -6em;
        padding-bottom: .78em;
      }
    }
  }
`

export const StyledButton = styled.button`
  margin-top: 4em;
  background: transparent;
  border: none;
  border: 1px solid transparent;
  border-bottom: 1px solid ${colors.darkGray};
  padding: .5em 1.5em;
  transition: .15s;
  position: relative;
  grid-area: btn;
  &:focus, :hover {
    border-radius: 30px;
    outline: none;
    border: 1px solid ${colors.darkGray};
  }
  ${breakpoints.laptop} {
    margin-top: 0;
    width: 35%;
    justify-self: end;
    padding: .5em 0;
  }
`

