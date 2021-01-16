import React from "react"
import Slider from "../ui/Slider"
import styled from "styled-components"

const StyledTitle = styled.p`
  font-size: 2rem;
  white-space: nowrap;
  margin-bottom: 1rem;

  @supports (-webkit-text-stroke: 1px black) {
    &:nth-child(2n) {
      -webkit-text-fill-color: white;
      -webkit-text-stroke: 1px black;
    }
  }
`

const ServicesSlider = ({ services }) => {
  return (
    <div>
      <Slider>
        {services.map(service => (
          <StyledTitle key={service.id}>{service.title}</StyledTitle>
        ))}
      </Slider>
      <Slider initialPosition="60%" time="16s">
        {services.map(service => (
          <StyledTitle key={service.id}>{service.title}</StyledTitle>
        ))}
      </Slider>
      <Slider initialPosition="25%" time="14s">
        {services.map(service => (
          <StyledTitle key={service.id}>{service.title}</StyledTitle>
        ))}
      </Slider>
    </div>
  )
}

export default ServicesSlider
