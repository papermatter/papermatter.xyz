import React, { useCallback, useEffect, useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Portal } from "./Portal"
import { useUI } from "./use-ui"
import ArrowLeft from "../Icons/ArrowLeft"
import Close from "../Icons/Close"
import ArrowRight from "../Icons/ArrowRight"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { breakpoints } from "../../styles/utils"
import { useIsMobile } from "../../lib/hooks/use-media-queries"
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

  const isMobile = useIsMobile()

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
          <span className="photo-indicator">
            {lightboxActiveIndex + 1} / {photos.length}
          </span>
          {!isMobile && (
            <button
              className="desktop-exit"
              aria-label="Close lightbox"
              onClick={onClose}
            >
              <Close />
            </button>
          )}
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
          {isMobile && (
            <button
              className="exit-btn"
              aria-label="Close lightbox"
              onClick={onClose}
            >
              Cerrar
            </button>
          )}
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
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    width: 100%;
    max-height: 100vh;
  }
  .react-transform-element {
    height: 100%;
    width: auto;
  }
  .photo-indicator {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--primary);
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 10;
  }
  .desktop-exit {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--primary);
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
  }
  button {
    position: fixed;
    cursor: pointer;
  }
  .exit-btn {
    color: white;
    text-shadow: 0px 0px 10px black;
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--font-md);
    font-weight: bold;
    bottom: 1.5rem;
    padding: 0.5rem 2rem;
  }
  .btn-left,
  .btn-right {
    color: white;
    height: 4rem;
    line-height: 0.5;
    background: rgb(17, 17, 17);
    padding: 0 0.5rem;
    ${breakpoints.tablet} {
      padding: 0 1rem;
    }
  }
  .btn-left {
    background: linear-gradient(
      90deg,
      rgba(20, 20, 20, 0.4) 0%,
      rgba(20, 20, 20, 0) 100%
    );
  }
  .btn-right {
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(20, 20, 20, 0.4) 0%,
      rgba(20, 20, 20, 0) 100%
    );
  }
`

const StyledImg = styled(Img)`
  width: 100%;
`
