import React from "react"
import styled from "styled-components"
import { AccordionButton, AccordionItem, AccordionPanel } from "../UI/Accordion"
import { breakpoints } from "../../styles/utils"

const StyledServiceSteps = styled.div`
  padding: 3rem 0 10rem;
  h3 {
    font-size: var(--font-3xl);
    margin-bottom: 1.5rem;
  }
  p {
    color: var(--text-tertiary);
    margin-bottom: 2.5rem;
  }
  ${breakpoints.laptop} {
    display: flex;
    justify-content: space-between;
    > div {
      flex: 0 0 40%;
      padding: 4rem 0;
    }
    > div:first-child {
      flex: 0 0 50%;
      padding-right: 4rem;
      border-right: 1px solid var(--element-tertiary);
    }
    h3 {
      margin-bottom: 2.5rem;
    }
  }
`

const StyledAccordionButton = styled.div`
  width: 100%;
  font-size: var(--font-xl);
  span {
    text-align: left;
    display: block;
    margin-bottom: 0.25rem;
    color: var(--text-tertiary);
    font-size: var(--font-md);
    font-family: var(--font-mono);
  }
`

const ServiceSteps = ({ steps }) => {
  return (
    <StyledServiceSteps>
      <div>
        <h3>Los pasos del proceso*</h3>
        <p>*Pueden ser más de los descritos</p>
      </div>
      <div>
        {steps.map((step, index) => (
          <AccordionItem key={step.id}>
            <StyledAccordionButton>
              <AccordionButton>
                <span>{index < 9 ? `0${index + 1}` : index + 1}</span>
                {step.title}
              </AccordionButton>
            </StyledAccordionButton>
            <AccordionPanel>{step.description}</AccordionPanel>
          </AccordionItem>
        ))}
      </div>
    </StyledServiceSteps>
  )
}

export default ServiceSteps
