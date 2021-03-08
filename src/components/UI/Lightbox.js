import React, { useCallback, useEffect, useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Portal } from "./Portal"
import { useUI } from "./use-ui"
import ArrowLeft from "../Icons/ArrowLeft"
import ArrowRight from "../Icons/ArrowRight"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

export default function Lightbox({ photos }) {
  const lightboxRef = useRef(null)

  const {
    closeLightbox,
    displayLightbox,
    setLightboxActiveIndex,
    lightboxActiveIndex,
  } = useUI()

  const onClose = e => {
    e.preventDefault()
    closeLightbox()
  }

  useEffect(() => {
    if (lightboxRef.current) {
      if (displayLightbox) {
        disableBodyScroll(lightboxRef.current)
      } else {
        enableBodyScroll(lightboxRef.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [displayLightbox])

  const prevPhoto = useCallback(() => {
    lightboxActiveIndex === 0
      ? setLightboxActiveIndex(photos.length - 1)
      : setLightboxActiveIndex(lightboxActiveIndex - 1)
  }, [lightboxActiveIndex, setLightboxActiveIndex, photos])

  const nextPhoto = useCallback(() => {
    lightboxActiveIndex === photos.length - 1
      ? setLightboxActiveIndex(0)
      : setLightboxActiveIndex(lightboxActiveIndex + 1)
  }, [lightboxActiveIndex, setLightboxActiveIndex, photos])

  useEffect(() => {
    const onKeyDown = e => {
      if (e.keyCode === 37) prevPhoto()
      if (e.keyCode === 39) nextPhoto()
      if (e.keyCode === 27) closeLightbox()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [closeLightbox, prevPhoto, nextPhoto])

  return (
    <Portal id="lightbox">
      {displayLightbox ? (
        <StyledLightbox ref={lightboxRef}>
          {photos.map((photo, index) => (
            <StyledImgContainer
              key={photo.id}
              index={index}
              activeIndex={lightboxActiveIndex}
            >
              <TransformWrapper>
                <TransformComponent>
                  <StyledImg
                    fluid={photo.photo.childImageSharp.fluid}
                    alt={photo.title}
                  />
                </TransformComponent>
              </TransformWrapper>
            </StyledImgContainer>
          ))}
          <button
            className="btn-left"
            aria-label="prev photo"
            onClick={() => prevPhoto()}
          >
            <ArrowLeft />
          </button>
          <button
            className="btn-right"
            aria-label="next photo"
            onClick={() => nextPhoto()}
          >
            <ArrowRight />
          </button>
          <button
            className="exit-btn"
            aria-label="Close lightbox"
            onClick={onClose}
          >
            Cerrar
          </button>
        </StyledLightbox>
      ) : null}
    </Portal>
  )
}

const StyledImgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: ${props => (props.index === props.activeIndex ? 1 : 0)};
  visibility: ${props =>
    props.index === props.activeIndex ? "visible" : "hidden"};
`

const StyledLightbox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background);
  z-index: 100000;
  .react-transform-component {
    height: 100%;
  }
  .react-transform-component,
  .react-transform-element {
    width: 100%;
  }

  button {
    position: fixed;
    cursor: pointer;
  }
  .exit-btn,
  .zoom-out {
    color: white;
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--font-md);
    font-weight: bold;
  }
  .exit-btn {
    bottom: 2rem;
    padding: 0.5rem 2rem;
  }
  .zoom-out {
    bottom: 4rem;
  }
  .btn-left,
  .btn-right {
    color: white;
    height: 10vh;
  }
  .btn-left {
    padding: 0 1rem;
    background: rgb(17, 17, 17);
    background: linear-gradient(
      90deg,
      rgba(20, 20, 20, 0.7) 0%,
      rgba(20, 20, 20, 0) 100%
    );
  }
  .btn-right {
    right: 1rem;
  }
`

const StyledImg = styled(Img)`
  width: 100%;
`
