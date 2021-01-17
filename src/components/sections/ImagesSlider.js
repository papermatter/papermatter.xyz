import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "../UI/Slider"

const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`

const StyledImg = styled(Img)`
  height: 300px;
  width: 300px;
`

const ClientsSlider = ({ images, initialPosition }) => {
  return (
    <Slider initialPosition={initialPosition} gap="0.5rem" time="25s">
      {images.map(image => (
        <StyledImageContainer key={image.id}>
          <StyledImg
            fluid={image.image.childImageSharp.fluid}
            alt={image.name}
          />
        </StyledImageContainer>
      ))}
    </Slider>
  )
}

export default ClientsSlider
