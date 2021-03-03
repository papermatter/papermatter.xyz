import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { usePortal } from "./use-portal"

const Portal = ({ id, children }) => {
  const target = usePortal(id)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? createPortal(children, target) : null
}

export default Portal
