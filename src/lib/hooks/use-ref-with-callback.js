import { useRef, useCallback } from "react"

export const useRefWithCallback = (onMount, onUnmount) => {
  const nodeRef = useRef(null)

  const ref = useCallback(
    node => {
      if (nodeRef.current) {
        onUnmount(nodeRef.current)
      }

      nodeRef.current = node

      if (nodeRef.current) {
        onMount(nodeRef.current)
      }
    },
    [onMount, onUnmount]
  )

  return ref
}
