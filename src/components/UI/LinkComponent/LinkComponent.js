import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../styles/Vars';
import { Link } from 'gatsby';

const StyledLinkComponent = styled.div`
  font-size: 0.8em;
  padding: 0.5em 0;
  text-align: center;
  border: 1px solid transparent;
  border-bottom: ${props => `1px solid ${props.color}`};
  width: 12em;
  margin: 1em auto 0;
  transition: 0.15s;
  &:hover {
    border: ${props => `1px solid ${props.color}`};
    border-radius: 10px;
  }
  a {
    color: ${props => props.color};
  }
`

export default function LinkComponent({to, children, color = colors.black}) {
  return (
    <StyledLinkComponent color={color}>
      <Link to={to}>
        {children}
      </Link>
    </StyledLinkComponent>
  )
}
