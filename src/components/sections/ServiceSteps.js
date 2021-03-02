
import React from "react"
import styled from "styled-components"
import {AccordionButton, AccordionItem, AccordionPanel} from '../UI/Accordion'

const StyledServiceSteps = styled.div`
  padding: 3rem 0;
  h3 {
    font-size: var(--font-3xl);
    margin-bottom: 1.5rem;
  }
  p {
    color: var(--text-tertiary);
    margin-bottom: 2.5rem;
  }
`

const StyledAccordionButton = styled.div`
  width: 100%;
  font-size: var(--font-xl);
  span {
    text-align: left;
    display: block;
    margin-bottom: .25rem;
    color: var(--text-tertiary);
    font-size: var(--font-md);
    font-family: var(--font-mono);
  }
`

const ServiceSteps = ({ steps }) => {
  return (
    <StyledServiceSteps>
      <h3>Los Pasos del proceso*</h3>
      <p>*Pueden ser más de los descritos</p>
      {steps.map((step, index) => (
        <AccordionItem key={step.id}> 
          <StyledAccordionButton>
            <AccordionButton>
              <span>
                {index < 9 ? `0${index+1}` : index+1}
              </span>
              {step.title}
            </AccordionButton>
          </StyledAccordionButton>
          <AccordionPanel>{step.description}</AccordionPanel>
        </AccordionItem>
      ))}
    </StyledServiceSteps>
  )
}

export default ServiceSteps
