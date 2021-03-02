import { useEffect, useRef } from "react"

const createRootElem = id => {
  const rootContainer = document.createElement("div")
  rootContainer.setAttribute("id", id)
  return rootContainer
}

const addRootElement = rootElem => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild.nextElementSibling
  )
}

export const usePortal = id => {
  const rootElemRef = useRef(null)

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`)

    const parentElement = existingParent || createRootElem(id)

    if (!existingParent) {
      addRootElement(parentElement)
    }

    parentElem.appendChild(rootElemRef.current)

    return () => {
      rootElemRef.current.remove()
      if (!parentElem.childElementCount) {
        parentElem.remove()
      }
    }
  }, [id])

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div")
    }
    return rootElemRef.current
  }

  return getRootElem()
}
