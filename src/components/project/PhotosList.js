import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { responsiveSectionMargin } from "../../styles/utils"
import Lightbox from "../UI/Lightbox"
import { useUI } from "../UI/use-ui"

const StyledPhotoList = styled.div`
  padding: 2rem 0;
  ${responsiveSectionMargin}
`

const StyledImg = styled(Img)`
  margin-bottom: 2.5rem;
`

const PhotosList = ({ photos }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const { openLightbox } = useUI()

  const onImageClick = index => {
    setImageIndex(index)
    openLightbox()
  }

  return (
    <>
      <StyledPhotoList>
        {photos.map((photo, index) => (
          <div onClick={() => onImageClick(index)} key={photo.id}>
            <StyledImg fluid={photo.photo.childImageSharp.fluid} />
          </div>
        ))}
      </StyledPhotoList>

      <Lightbox photos={photos} initialIndex={imageIndex} />
    </>
  )
}

export default PhotosList
