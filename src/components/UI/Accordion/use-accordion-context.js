import { createContext, useContext } from 'react'


export const AccordionContext = createContext(null)

export const useAccordionContext = ()=> {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(
      `Accordion compound components cannot be rendered outside the AccordionItem component`
    )
  }

  return context
}