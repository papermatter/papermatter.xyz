import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import {AccordionContext} from './use-accordion-context'

const StyledAccordionItem = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid var(--element-tertiary);
  &:focus-within {
    border-bottom: 1px solid var(--element-primary);
  }
`

const AccordionItem = ({children}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const toggle = useCallback(() => {
    setIsExpanded((oldVisible) => !oldVisible)
  }, [setIsExpanded])

  const value = useMemo(() => ({ isExpanded, toggle }), [isExpanded, toggle])

  return (
    <AccordionContext.Provider value={value}>
      <StyledAccordionItem>
        {children}
      </StyledAccordionItem>
    </AccordionContext.Provider>
  )
}

export default AccordionItem
