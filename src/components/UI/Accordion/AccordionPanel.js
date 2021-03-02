import React from 'react'
import styled from 'styled-components'
import { useAccordionContext } from './use-accordion-context'

const StyledAccordionPanel = styled.div`
  padding: 1rem 0;
  font-size: var(--font-md);
  line-height: 1.5;
  color: var(--text-secondary);
`

const AccordionPanel = ({children}) => {
  const {isExpanded} = useAccordionContext()

  if (!isExpanded) return null;

  return (
    <StyledAccordionPanel>
      {children}
    </StyledAccordionPanel>
  )
}

export default AccordionPanel
