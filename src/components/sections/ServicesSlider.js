import React from "react"
import Slider from "../UI/Slider"
import styled from "styled-components"
import { breakpoints, responsiveSectionMargin } from "../../styles/utils"

const StyledServicesSlider = styled.div`
  ${responsiveSectionMargin}

  p {
    font-size: 2rem;
    white-space: nowrap;
    margin: 1.5rem 0;
    @supports (-webkit-text-stroke: 1px black) {
      &:nth-child(2n) {
        font-weight: bold;
        -webkit-text-fill-color: white;
        -webkit-text-stroke: 1px black;
      }
    }
    ${breakpoints.laptop} {
      font-size: 3.5rem;
      margin: 1.5rem 1.5rem;
    }
  }

`

const ServicesSlider = ({ services }) => {
  return (
    <StyledServicesSlider>
      <Slider time="18s">
        {services.map(service => (
          <p key={service.id}>{service.title}</p>
        ))}
      </Slider>
      <Slider initialPosition="-30%">
        {services.map(service => (
          <p key={service.id}>{service.title}</p>
        ))}
      </Slider>
      <Slider initialPosition="-20%" time="20s">
        {services.map(service => (
          <p key={service.id}>{service.title}</p>
        ))}
      </Slider>
    </StyledServicesSlider>
  )
}

export default ServicesSlider
