import { useCallback, useReducer } from "react"
import { useRefWithCallback } from "../use-ref-with-callback"
import { initialState, reducer } from "./store"
import {
  getMidPointPosition,
  pan,
  startPan,
  zoom,
  getDistance,
  pinchZoom,
} from "./utils"

export default function usePanAndZoom() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onMouseMoveInWindow = e => {
    e.preventDefault()
    dispatch(pan(e))
  }

  const onMouseUpInWindow = () => {
    window.removeEventListener("mouseup", onMouseUpInWindow)
    window.removeEventListener("mousemove", onMouseMoveInWindow)
  }

  const onMouseDown = e => {
    dispatch(startPan(e))
    window.addEventListener("mouseup", onMouseUpInWindow)
    window.addEventListener("mousemove", onMouseMoveInWindow)
  }

  const onTouchMove = e => {
    e.preventDefault()
    e.stopPropagation()
    if (e.touches[1]) {
      if (e.touches[2]) return
      const containerRect = e.target.getBoundingClientRect()
      const { x, y } = getMidPointPosition(e.touches[0], e.touches[1])
      const currentDistance = getDistance(e.touches[0], e.touches[1])
      dispatch(pinchZoom(x, y, currentDistance, containerRect))
    } else {
      dispatch(pan(e.touches[0]))
    }
  }

  const onTouchEnd = () => {
    document.removeEventListener("touchend", onTouchEnd, false)
    document.removeEventListener("touchmove", onTouchMove, { passive: false })
  }

  const onTouchStart = e => {
    const firstTouch = e.touches[0]
    dispatch(startPan(firstTouch))
    document.addEventListener("touchend", onTouchEnd, false)
    document.addEventListener("touchmove", onTouchMove, { passive: false })
  }

  const onWheel = useCallback(e => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()

    if (e.deltaY !== 0) {
      const containerRect = e.target.getBoundingClientRect()
      dispatch(zoom(e, containerRect))
    }
  }, [])

  const containerRef = useRefWithCallback(
    () => document.addEventListener("wheel", onWheel, { passive: false }),
    () =>
      document.removeEventListener("wheel", onWheel, {
        passive: false,
      })
  )

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
