import { useReducer } from 'react'
import {reducer, initialState} from '../reducer/reducer'
import {pan, startPan} from '../reducer/actions'

export default function usePanAndZoom() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onMouseMoveInWindow = event => {
    event.preventDefault();
    dispatch(pan(event));
  }

  const onMouseUpInWindow = () => {
    window.removeEventListener('mouseup', onMouseUpInWindow);
    window.removeEventListener('mousemove', onMouseMoveInWindow);
  }

  const onMouseDown = (event) => {
    dispatch(startPan(event));
    window.addEventListener('mouseup', onMouseUpInWindow);
    window.addEventListener('mousemove', onMouseMoveInWindow);
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


  return {
    ...state,
    onMouseDown,
    onTouchStart,
  }
}
