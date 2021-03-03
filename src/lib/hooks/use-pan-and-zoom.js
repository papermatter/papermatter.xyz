import { useReducer } from "react"

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
    case "RESET":
      return initialState
    default:
      return state
  }
}

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

export default function usePanAndZoom() {
  const [state, dispatch] = useReducer(reducer, initialState)

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

  const getTouches = e => {
    return e.touches
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

  const reset = () => dispatch({ type: "RESET" })

  return {
    ...state,
    onMouseDown,
    onTouchStart,
    reset,
  }
}
