import React from 'react'
import styled from "styled-components"
import { colors } from "../../styles/Vars"

const StyledDivButton = styled.div`
  display: flex;
`

const StyledButton = styled.button`
  font-size: 0.8em;
  padding: 0.5em 0;
  text-align: center;
  border: 1px solid transparent;
  border-bottom: ${props => `1px solid ${props.color}`};
  width: 12em;
  margin: 1em auto 0;
  color: ${props => props.color};
  transition: .2s;
  cursor: pointer;
  &:hover {
    border: ${props => `1px solid ${props.color}`};
    border-radius: 10px;
  }
  &[disabled] {
    opacity: 0.3;
  }
`


export default function ButtonComponent({children, color = colors.black, onClick, disabled = false}) {
  return (
    <StyledDivButton>
      <StyledButton disabled={disabled} color={color} onClick={onClick}>
        {children}
      </StyledButton>
    </StyledDivButton>
  )
}
