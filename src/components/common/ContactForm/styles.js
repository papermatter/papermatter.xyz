import styled from "styled-components"
import { breakpoints } from "../../../styles/Vars"

export const StyledContainer = styled.section`
  padding: 5rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: var(--font-3xl);
    margin-bottom: 1rem;
    text-align: center;
  }
  .message {
    margin-top: 1.5rem;
    color: red;
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

export const StyledForm = styled.form`
  div {
    position: relative;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--primary-20);
    &:focus-within {
      border-bottom: 1px solid var(--primary-90);
      label {
        transform: translate(0, 0) scale(0.75);
      }
    }
  }
  input,
  textarea {
    font-family: inherit;  
    font-size: var(--font-lg);
    width: 100%;
    background: transparent;
    border: none;
    outline: 0;
    &:not(:placeholder-shown) + label {
      transform: translate(0, 0) scale(0.75);
    }
  }
  input {
    padding: 1.5rem 0 0.5rem;
  }
  textarea {
    resize: none;
    padding: 0;
    height: 1.75rem;
    margin-top: 1.5rem;
    &:not(:placeholder-shown), :focus {
      height: 6rem;
    }
  }

  label {
    position: absolute;
    font-family: var(--font-mono);
    font-size: var(--font-md);
    color: var(--text-tertiary);
    transform-origin: top left;
    left: 0;
    transform: translate(0, 16px) scale(1);
    transition: transform 0.1s ease-in-out;
    cursor: text;
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
    #messageContainer {
      grid-area: message;
      border-bottom: none;
    }
    textarea {
      border-bottom: 1px solid var(--primary-20);
      height: 2.25rem;
      &:not(:placeholder-shown),
      :focus {
        height: 85%;
        padding-bottom: .5rem;
      }
      &:focus {
        border-bottom: 1px solid var(--primary-90);
      }
    }
  }
`

export const StyledButton = styled.button`
  margin: 2rem auto 0;
  display: block;
  font-family: var(--font-mono);
  font-size: var(--font-md);
  color: var(--text-tertiary);
  border-bottom: 1px solid transparent;
  padding: 1rem 2rem;
  grid-area: btn;
  cursor: pointer;
  transition: color, border .1s;
  &:focus,
  :hover {
    border-bottom: 1px solid var(--text-secondary);
    color: var(--primary);
  }
  ${breakpoints.laptop} {
    margin-top: 0;
    width: 35%;
    justify-self: end;
    padding: 0.5rem 0;
  }
`
