/* PAN UTILS */
export const startPan = e => ({
  type: "PAN_START",
  clientX: e.clientX,
  clientY: e.clientY,
})

export const pan = e => ({
  type: "PAN",
  clientX: e.clientX,
  clientY: e.clientY,
})

/* PINCH */
export const getDistance = (firstPoint, secondPoint) => {
  return Math.sqrt(
    Math.pow(firstPoint.pageX - secondPoint.pageX, 2) +
      Math.pow(firstPoint.pageY - secondPoint.pageY, 2)
  )
}

export const getCurrentDistance = e => {
  return getDistance(e.touches[0], e.touches[1])
}

export const getMidPointPosition = (firstPoint, secondPoint) => {
  if (firstPoint || secondPoint) console.warn("There're no points provided")
  return {
    x: (firstPoint.clientX + secondPoint.clientX) / 2,
    y: (firstPoint.clientY + secondPoint.clientY) / 2,
  }
}

/* ZOOM */
const ZOOM_FACTOR = 0.1
const ZOOM_FACTOR_IN = 1 + ZOOM_FACTOR
const ZOOM_FACTOR_OUT = 1 - ZOOM_FACTOR

export const zoom = (event, containerRect) => ({
  type: "ZOOM",
  zoomFactor: event.deltaY < 0 ? ZOOM_FACTOR_IN : ZOOM_FACTOR_OUT,
  clientX: event.clientX,
  clientY: event.clientY,
  containerRect: containerRect,
})

export const pinchZoom = (x, y, currentDistance, containerRect) => ({
  type: "PINCH_ZOOM",
  midPointX: x,
  midPointY: y,
  currentDistance: currentDistance,
  containerRect: containerRect,
})

export const getZoomFactor = (prevDistance, currentDistance) => {
  return prevDistance > currentDistance ? ZOOM_FACTOR_IN : ZOOM_FACTOR_OUT
}

export const getZoomOffset = (containerRect, midPoint, zoomFactor) => {
  const zoomOrigin = {
    x: midPoint.x - containerRect.left,
    y: midPoint.y - containerRect.top,
  }
  const currentDistanceToCenter = {
    x: containerRect.width / 2 - zoomOrigin.x,
    y: containerRect.height / 2 - zoomOrigin.y,
  }
  const scaledDistanceToCenter = {
    x: currentDistanceToCenter.x * zoomFactor,
    y: currentDistanceToCenter.y * zoomFactor,
  }
  const zoomOffset = {
    x: currentDistanceToCenter.x - scaledDistanceToCenter.x,
    y: currentDistanceToCenter.y - scaledDistanceToCenter.y,
  }
  return zoomOffset
}

export const getScaledTranslate = (state, zoomFactor) => ({
  x: state.translateX * zoomFactor,
  y: state.translateY * zoomFactor,
})
