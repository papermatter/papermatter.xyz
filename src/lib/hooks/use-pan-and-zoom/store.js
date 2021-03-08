import { getScaledTranslate, getZoomFactor, getZoomOffset } from "./utils"

export const initialState = {
  translateX: 0,
  translateY: 0,
  prevMouseX: 0,
  prevMouseY: 0,
  touchX: 0,
  touchY: 0,
  scale: 1,
  prevDistance: 0,
}

export const reducer = (state, action) => {
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
    case "PINCH_ZOOM":
      const scaledTranslat = getScaledTranslate(state, action.zoomFactor)
      const midPoint = { x: action.midPointX, y: action.midPointY }
      console.log("pinch")
      const zoomFactor = getZoomFactor(
        state.prevDistance,
        action.currentDistance
      )
      const zoomOffse = getZoomOffset(
        action.containerRect,
        midPoint,
        zoomFactor
      )
      return {
        ...state,
        scale: state.scale * action.zoomFactor,
        translateX: scaledTranslat.x + zoomOffse.x,
        translateY: scaledTranslat.y + zoomOffse.y,
        prevDistance: action.currentDistance,
      }
    case "RESET":
      return initialState
    default:
      return state
  }
}
