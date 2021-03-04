import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../styles/utils"
import Lightbox from "../UI/Lightbox"
import { useUI } from "../UI/use-ui"

const StyledPhotoList = styled.div`
  padding: 2rem 0;
  margin: 0 -1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .image-container {
    flex: 0 0 100%;
    margin-bottom: 2.5rem;
    cursor: pointer;
  }
  ${breakpoints.tablet} {
    margin: 0 -6rem;
  }
  ${breakpoints.laptop} {
    margin: 0;
    .image-container:nth-child(3n),
    .image-container:nth-child(3n -1) {
      flex: 0 0 48%;
      div {
        height: 25rem;
      }
    }
  }
`

const PhotosList = ({ photos }) => {
  const { openLightbox, setLightboxActiveIndex } = useUI()

  const onImageClick = index => {
    setLightboxActiveIndex(index)
    openLightbox()
  }

  return (
    <>
      <StyledPhotoList>
        {photos.map((photo, index) => (
          <button
            className="image-container"
            onClick={() => onImageClick(index)}
            key={photo.id}
          >
            <Img fluid={photo.photo.childImageSharp.fluid} />
          </button>
        ))}
      </StyledPhotoList>

      <Lightbox photos={photos} />
    </>
  )
}

export default PhotosList
