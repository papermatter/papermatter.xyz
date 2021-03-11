import { useEffect, useRef, useState } from "react"

export const useIntersectionObserver = ({ rootMargin = "10px" } = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    let observer

    const onChange = entries => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsIntersecting(true)
      } else {
        setIsIntersecting(false)
      }
    }

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(onChange, {
        rootMargin: rootMargin,
      })

      observer.observe(ref.current)
    }

    return () => observer && observer.disconnect()
  }, [rootMargin])

  return { isIntersecting, ref }
}
