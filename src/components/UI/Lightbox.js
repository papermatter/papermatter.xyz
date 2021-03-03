import React, { useEffect, useRef, useState } from "react"
import usePanAndZoom from "../../lib/hooks/use-pan-and-zoom"
import Img from "gatsby-image"
import styled from "styled-components"
import { Portal } from "./Portal"
import { useUI } from "./use-ui"
import ArrowLeft from "../Icons/ArrowLeft"
import ArrowRight from "../Icons/ArrowRight"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

export default function Lightbox({ photos, initialIndex }) {
  const [activeTab, setActiveTab] = useState(initialIndex)

  const [isZoomIn, setIsZoomIn] = useState(false)

  const lightboxRef = useRef(null)

  const { closeLightbox, displayLightbox } = useUI()

  const {
    onMouseDown,
    onTouchStart,
    translateX,
    translateY,
    reset,
  } = usePanAndZoom()

  // useEffect(() => {
  //   setActiveTab(initialIndex)
  // }, [initialIndex])

  const zoomIn = () => {
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

  const prevPhoto = () => {
    activeTab === 0
      ? setActiveTab(photos.length - 1)
      : setActiveTab(activeTab - 1)
    zoomOut()
  }

  const nextPhoto = () => {
    activeTab === photos.length - 1
      ? setActiveTab(0)
      : setActiveTab(activeTab + 1)
    zoomOut()
  }

  useEffect(() => {
    const onKeyDown = e => {
      if (e.keyCode === 37) prevPhoto()
      if (e.keyCode === 39) nextPhoto()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])
  return (
    <Portal id="lightbox">
      {displayLightbox ? (
        <StyledLightbox>
          <div
            ref={lightboxRef}
            className="image-container"
            onClick={zoomIn}
            onDoubleClick={() => (isZoomIn ? zoomOut() : null)}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            style={{
              transform: `${
                !isZoomIn
                  ? "translate(0, 0)"
                  : `translate(${translateX}px, ${translateY}px) scale(2)`
              }`,
              cursor: `${isZoomIn ? "move" : "zoom-in"}`,
            }}
          >
            {photos.map((photo, index) => (
              <StyledImg
                key={photo.id}
                fluid={photo.photo.childImageSharp.fluid}
                style={{ display: `${index === activeTab ? "block" : "none"}` }}
                alt={photo.title}
              />
            ))}
          </div>

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
`
