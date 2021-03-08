import React, { useCallback, useEffect, useRef, useState } from "react"
import usePanAndZoom from "../../lib/hooks/use-pan-and-zoom/use-pan-and-zoom"
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
  const [isZoomIn, setIsZoomIn] = useState(false)

  const lightboxRef = useRef(null)

  const {
    closeLightbox,
    displayLightbox,
    setLightboxActiveIndex,
    lightboxActiveIndex,
  } = useUI()

  const {
    containerRef,
    onMouseDown,
    onTouchStart,
    translateX,
    translateY,
    scale,
    reset,
  } = usePanAndZoom()

  const onLightboxClick = e => {
    e.preventDefault()
    setIsZoomIn(true)
  }

  const zoomOut = () => {
    setIsZoomIn(false)
  }

  const onClose = e => {
    e.preventDefault()
    closeLightbox()
    reset()
    zoomOut()
  }

  // useEffect(() => {
  //   if (lightboxRef.current) {
  //     if (displayLightbox) {
  //       disableBodyScroll(lightboxRef.current)
  //     } else {
  //       enableBodyScroll(lightboxRef.current)
  //     }
  //   }
  //   return () => {
  //     clearAllBodyScrollLocks()
  //   }
  // }, [displayLightbox])

  const prevPhoto = useCallback(() => {
    lightboxActiveIndex === 0
      ? setLightboxActiveIndex(photos.length - 1)
      : setLightboxActiveIndex(lightboxActiveIndex - 1)
    setIsZoomIn(false)
  }, [lightboxActiveIndex, setLightboxActiveIndex, setIsZoomIn, photos])

  const nextPhoto = useCallback(() => {
    lightboxActiveIndex === photos.length - 1
      ? setLightboxActiveIndex(0)
      : setLightboxActiveIndex(lightboxActiveIndex + 1)
    setIsZoomIn(false)
  }, [lightboxActiveIndex, setLightboxActiveIndex, setIsZoomIn, photos])

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
        <StyledLightbox>
          <TransformWrapper>
            <TransformComponent>
              {photos.map((photo, index) => (
                <StyledImg
                  key={photo.id}
                  fluid={photo.photo.childImageSharp.fluid}
                  style={{
                    visibility:
                      index === lightboxActiveIndex ? "visible" : "hidden",
                    display: `${
                      index === lightboxActiveIndex ? "block" : "none"
                    }`,
                  }}
                  alt={photo.title}
                />
              ))}
            </TransformComponent>
            {/* <button
              // ref={lightboxRef}
              ref={containerRef}
              className="image-container"
              onClick={onLightboxClick}
              onDoubleClick={() => (isZoomIn ? zoomOut() : null)}
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              style={{
                // transform: `${
                //   !isZoomIn
                //     ? "translate(0, 0)"
                //     : `translate(${translateX}px, ${translateY}px) scale(${scale})`
                // }`,
                // cursor: `${isZoomIn ? "move" : "zoom-in"}`,
                transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                cursor: `${isZoomIn ? "move" : "zoom-in"}`,
              }}
            ></button> */}

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
            {isZoomIn && (
              <button className="zoom-out" onClick={() => zoomOut()}>
                Click here to zoom out
              </button>
            )}
            <button
              className="exit-btn"
              aria-label="Close lightbox"
              onClick={onClose}
            >
              Cerrar
            </button>
          </TransformWrapper>
        </StyledLightbox>
      ) : null}
    </Portal>
  )
}

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
  > .react-transform-component {
    height: 100vh;
  }
  .react-transform-component,
  .react-transform-element {
    position: relative;
    width: 100%;
  }
  .image-container {
    width: 100%;
    position: relative;
  }
  button {
    position: fixed;
    cursor: pointer;
  }
  .exit-btn,
  .zoom-out {
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--font-md);
    font-weight: bold;
  }
  .exit-btn {
    bottom: 2rem;
  }
  .zoom-out {
    bottom: 4rem;
  }
  .btn-left,
  .btn-right {
    top: 50%;
    transform: translateY(-50%);
  }
  .btn-left {
    left: 1rem;
  }
  .btn-right {
    right: 1rem;
  }
`

const StyledImg = styled(Img)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
