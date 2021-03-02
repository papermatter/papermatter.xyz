import React from 'react'
import styled from 'styled-components'
import { useAccordionContext } from './use-accordion-context'
import ChevronDown from '../../Icons/ChevronDown'
import ChevronUp from '../../Icons/ChevronUp'

const StyledAccordionButton = styled.button`
  width: 100%;
  text-align: left;
  position: relative;
  &:focus {
    outline: none;
  }
  .subfix {
    position: absolute;
    right: 1rem;
    top: 70%;
    transform: translateY(-50%);
  }
`

const AccordionButton = ({children}) => {
  const { toggle, isExpanded } = useAccordionContext()

  return (
    <StyledAccordionButton onClick={toggle}>
      {children}

      <span className="subfix">
        {isExpanded ?  <ChevronUp /> : <ChevronDown />}
      </span>
    </StyledAccordionButton>
  )
}

export default AccordionButton
