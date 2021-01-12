import React, { useState, useEffect } from "react"
import { ExitIcon, ArrowLeftIcon, ArrowRightIcon } from '../Icons'
import usePanAndZoom from "../../hooks/usePanAndZoom";
import { StyledLightbox } from "./styles";
import { colors } from "../../styles/Vars";

export default function Lightbox({photos, initialActiveTab, handleCloseClick}) {
  const [activeTab, setActiveTab] = useState(0)
  const [isZoomIn, setIsZoomIn] = useState(false);

  useEffect(() => {
    setActiveTab(initialActiveTab-1)
  }, [initialActiveTab])

  const {onMouseDown, onTouchStart, translateX, translateY} = usePanAndZoom();
  
  const ZoomIn = () => {
    setIsZoomIn(true)
  }
  const ZoomOut = () => {
    setIsZoomIn(false)
  }

  const prevPhoto = () => {
    activeTab === 0
      ? setActiveTab(photos.length - 1)
      : setActiveTab(activeTab - 1)
    ZoomOut()
  }

  const nextPhoto = () => {
    activeTab === photos.length - 1
      ? setActiveTab(0)
      : setActiveTab(activeTab + 1)
    ZoomOut()
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 37) {
      return prevPhoto()
    } else if (e.keyCode === 39) {
      return nextPhoto()
    }
    return;
  }


  useEffect(() => {
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeTab])
  
  return (
    <StyledLightbox isShow={initialActiveTab}>
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
              : `translate(${translateX}px, ${translateY}px)`
          }`,
          width: `${isZoomIn ? '300%' : '100%'}`,
          cursor: `${isZoomIn ? "move" : "zoom-in"}`,
          marginLeft: `${isZoomIn ? "-50%" : "0"}`,
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            style={{ display: `${index === activeTab ? "block" : "none"}` }}
            alt={"name"}
          />
        ))}
      </div>
      <p>{`${activeTab + 1}/${photos.length}`}</p>
      <button className="exit-btn" onClick={() => handleCloseClick()}>
        <ExitIcon size="2em" />
      </button>
      <button className="btn-left" onClick={() => prevPhoto()}>
        <ArrowLeftIcon size="2em" color={colors.black} />
      </button>
      <button className="btn-right" onClick={() => nextPhoto()}>
        <ArrowRightIcon size="2em" color={colors.black} />
      </button>
      {isZoomIn && (
        <span onClick={() => ZoomOut()}>Click here to zoom out</span>
      )}
    </StyledLightbox>
  )
}
