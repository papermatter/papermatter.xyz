import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { breakpoints, responsiveSectionMargin } from "../../styles/utils"
import Slider from "../UI/Slider"

const StyledServicesSlider = styled.div`
  ${responsiveSectionMargin}

  a {
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

const StyledContainer = styled.div`
  margin: 6rem 0;
  h3 {
    font-size: var(--font-3xl);
    color: var(--text-secondary);
    margin-bottom: 4rem;
    ${breakpoints.laptop} {
      margin-bottom: 8rem;
      text-align: center;
    }
  }
`

const ServicesSliderLink = ({ services }) => {
  return (
    <StyledContainer>
      <h3>Explora otros servicios</h3>
      <StyledServicesSlider>
        <Slider time="24s">
          {services.map(service => (
            <Link key={service.slug} to={`/servicios/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </Slider>
      </StyledServicesSlider>
    </StyledContainer>
  )
}

export default ServicesSliderLink
