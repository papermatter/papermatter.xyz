import { useReducer, useRef } from "react"

const startPan = event => ({
  type: "PAN_START",
  clientX: event.clientX,
  clientY: event.clientY,
})

const pan = event => ({
  type: "PAN",
  clientX: event.clientX,
  clientY: event.clientY,
})

const getTouches = e => {
  return e.touches
}

const ZOOM_FACTOR = 0.1
const ZOOM_FACTOR_IN = 1 + ZOOM_FACTOR
const ZOOM_FACTOR_OUT = 1 - ZOOM_FACTOR

const zoom = (event, containerRect) => ({
  type: "ZOOM",
  zoomFactor: event.deltaY < 0 ? ZOOM_FACTOR_IN : ZOOM_FACTOR_OUT,
  clientX: event.clientX,
  clientY: event.clientY,
  containerRect: containerRect,
})

const getZoomOffset = (containerRect, mousePositionOnScreen, zoomFactor) => {
  const zoomOrigin = {
    x: mousePositionOnScreen.x - containerRect.left,
    y: mousePositionOnScreen.y - containerRect.top,
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

const getScaledTranslate = (state, zoomFactor) => ({
  x: state.translateX * zoomFactor,
  y: state.translateY * zoomFactor,
})

const initialState = {
  translateX: 0,
  translateY: 0,
  prevMouseX: 0,
  prevMouseY: 0,
  touchX: 0,
  touchY: 0,
  scale: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "PAN_START":
      return {
        ...state,
        prevMouseX: action.clientX,
        prevMouseY: action.clientY,
      }
    case "PAN":
      const deltaMouseX = action.clientX - state.prevMouseX
      const deltaMouseY = action.clientY - state.prevMouseY
      return {
        ...state,
        translateX: state.translateX + deltaMouseX,
        translateY: state.translateY + deltaMouseY,
        prevMouseX: action.clientX,
        prevMouseY: action.clientY,
      }
    case "ZOOM":
      const scaledTranslate = getScaledTranslate(state, action.zoomFactor)
      const mousePositionOnScreen = { x: action.clientX, y: action.clientY }
      const zoomOffset = getZoomOffset(
        action.containerRect,
        mousePositionOnScreen,
        action.zoomFactor
      )
      return {
        ...state,
        scale: state.scale * action.zoomFactor,
        translateX: scaledTranslate.x + zoomOffset.x,
        translateY: scaledTranslate.y + zoomOffset.y,
      }
    case "RESET":
      return initialState
    default:
      return state
  }
}

export default function usePanAndZoom() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const containerRef = useRef(null)

  const onMouseMoveInWindow = event => {
    event.preventDefault()
    dispatch(pan(event))
  }

  const onMouseUpInWindow = () => {
    window.removeEventListener("mouseup", onMouseUpInWindow)
    window.removeEventListener("mousemove", onMouseMoveInWindow)
  }

  const onMouseDown = event => {
    dispatch(startPan(event))
    window.addEventListener("mouseup", onMouseUpInWindow)
    window.addEventListener("mousemove", onMouseMoveInWindow)
  }

  const onTouchMove = e => {
    dispatch(pan(e.touches[0]))
  }

  const onTouchEnd = () => {
    document.removeEventListener("touchend", onTouchEnd, false)
    document.removeEventListener("touchmove", onTouchMove, false)
  }

  const onTouchStart = e => {
    const firstTouch = getTouches(e)[0]
    dispatch(startPan(firstTouch))
    document.addEventListener("touchend", onTouchEnd, false)
    document.addEventListener("touchmove", onTouchMove, false)
  }

  const onWheel = event => {
    if (event.deltaY !== 0 && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      dispatch(zoom(event, containerRect))
    }
  }

  const reset = () => dispatch({ type: "RESET" })

  return {
    ...state,
    containerRef,
    onMouseDown,
    onTouchStart,
    onWheel,
    reset,
  }
}
