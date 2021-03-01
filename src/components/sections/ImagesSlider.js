import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "../UI/Slider"
import { responsiveSectionMargin } from "../../styles/Vars"


const StyledImagesSlider = styled.div`
  ${responsiveSectionMargin}
`

const StyledImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: .75rem 0;
`


const StyledImg = styled(Img)`
  height: 300px;
  width: 300px;
`

const ImagesSlider = ({ images, initialPosition }) => {
  return (
    <StyledImagesSlider>
      <Slider initialPosition={initialPosition} gap="1.5rem" time="25s">
        {images.map(image => (
          <StyledImageContainer key={image.id}>
            <StyledImg
              fluid={image.image.childImageSharp.fluid}
              alt={image.name}
            />
          </StyledImageContainer>
        ))}
      </Slider>
    </StyledImagesSlider>
  )
}

export default ImagesSlider
