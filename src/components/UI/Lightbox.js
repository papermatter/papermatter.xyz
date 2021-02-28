import React, { useState } from "react"
import usePanAndZoom from "../../lib/hooks/usePanAndZoom"
import Img from "gatsby-image"
import styled from "styled-components"

export default function Lightbox({ image, handleCloseClick }) {
  const [isZoomIn, setIsZoomIn] = useState(false)

  const { onMouseDown, onTouchStart, translateX, translateY } = usePanAndZoom()

  const ZoomIn = () => {
    setIsZoomIn(true)
  }
  const ZoomOut = () => {
    setIsZoomIn(false)
  }

  return (
    <StyledLightbox>
      <div
        role="menuitem"
        onClick={ZoomIn}
        onDoubleClick={() => (isZoomIn ? ZoomOut() : null)}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          transform: `${
            !isZoomIn
              ? "translate(0px, 0px)"
              : `translate(${translateX}px, ${translateY}px) scale(2.5)`
          }`,
          cursor: `${isZoomIn ? "move" : "zoom-in"}`,
        }}
      >
        <StyledImg
          fluid={image.image.childImageSharp.fluid}
          alt={image.title}
        />
      </div>

      {isZoomIn && (
        <button className="zoom-out" onClick={() => ZoomOut()}>
          Click here to zoom out
        </button>
      )}
      <button className="exit-btn" onClick={() => handleCloseClick()}>
        Cerrar
      </button>
    </StyledLightbox>
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
  button {
    position: absolute;
    cursor: pointer;
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
`

const StyledImg = styled(Img)`
  position: absoulte;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
`
