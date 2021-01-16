import React from "react"
import Slider from "../ui/Slider"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImageSlider = styled.div`
  margin: 0 -1.5rem;
  .image-card {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }
`

const StyledImg = styled(Img)`
  height: 300px;
  width: 300px;
`

const ClientsSlider = ({ images, initialPosition }) => {
  return (
    <StyledImageSlider>
      <Slider initialPosition={initialPosition} gap="0.5rem" time="25s">
        {images.map(image => (
          <div className="image-card" key={image.id}>
            <StyledImg
              fluid={image.image.childImageSharp.fluid}
              alt={image.name}
            />
          </div>
        ))}
      </Slider>
    </StyledImageSlider>
  )
}

export default ClientsSlider
