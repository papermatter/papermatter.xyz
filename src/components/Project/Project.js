import React, { useState, useEffect } from 'react'
import {StyledProject, StyledProjectInfoContainer, StyledPhotosContainer, DivPhoto} from './styles'
import Lightbox from '../Lightbox/Lightbox'
import { useBreakpoint } from "../../hooks/useBreakpoints"
import Nav from '../Nav/Nav'

export default function Project({project}) {
  const [initialActiveTab, setInitialActiveTab] = useState(null)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    let allPhotos = [project.main_photo.publicURL]

    project.Photos.map((item) => allPhotos.push(item.project_photo.publicURL))
    setPhotos(photos.concat(allPhotos))
  }, [])

  

  const openLightbox = tabIndex => {    
    setInitialActiveTab(tabIndex)
  }

  const closeLightbox = () => {
    setInitialActiveTab(null)
  }
  const breakpoints = useBreakpoint()

  return (
    <StyledProject>
      <Lightbox
        photos={photos}
        initialActiveTab={initialActiveTab}
        handleCloseClick={closeLightbox}
      />

      <Nav data={project.project_category} title={project.title}/>

      {breakpoints.tablet && <h1>{project.title}</h1>}
      <DivPhoto
        onClick={() => openLightbox(1)}
        url={project.main_photo.childImageSharp.fluid.src}
      />
      <StyledProjectInfoContainer>
        {!breakpoints.tablet && <h1>{project.title}</h1>}
        <div className="project-info-container">
          <div className="description-container">
            <h5>El proyecto</h5>
            <p>{project.description}</p>
          </div>
          <div className="infoContainer">
            <div>
              <h5>Cliente</h5>
              <p>{project.client}</p>
            </div>
            <div>
              <h5>Tipo de proyecto</h5>
              <p>{project.project_category.name}</p>
            </div>
            <div>
              <h5>Ubicación</h5>
              <p>{project.location}</p>
            </div>
            <div>
              <h5>Año</h5>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      </StyledProjectInfoContainer>
      <StyledPhotosContainer>
        {project.Photos.map((photo, index) => (
          <DivPhoto
            onClick={() => openLightbox(index + 2)}
            url={photo.project_photo.childImageSharp.fluid.src}
            key={index}
          />
        ))}
      </StyledPhotosContainer>
    </StyledProject>
  )
}
