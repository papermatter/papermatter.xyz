import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { responsiveSectionMargin } from "../../styles/utils"

const StyledPhotoList = styled.div`
  padding: 2rem 0;
  ${responsiveSectionMargin}
`

const StyledImg = styled(Img)`
  margin-bottom: 2.5rem;
`

const PhotosList = ({ photos }) => {
  return (
    <StyledPhotoList>
      {photos.map(photo => (
        <StyledImg
          // onClick={() => openLightbox(index + 2)}
          fluid={photo.photo.childImageSharp.fluid}
          key={photo.id}
        />
      ))}
    </StyledPhotoList>
  )
}

export default PhotosList
