import React, { createContext, useContext, useMemo, useReducer } from "react"

const initialState = {
  displayLightbox: false,
  lightboxPhotos: [],
}

export const UIContext = createContext(initialState)

const uiReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_LIGHTBOX":
      return {
        ...state,
        displayLightbox: true,
      }
    case "CLOSE_LIGHTBOX":
      return {
        ...state,
        displayLightbox: false,
      }
    case "SET_LIGHTBOX_PHOTOS":
      return {
        ...state,
        lightboxPhotos: action.payload,
      }
    default:
      return state
  }
}

const UIProvider = props => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openLightbox = () => dispatch({ type: "OPEN_LIGHTBOX" })
  const closeLightbox = () => dispatch({ type: "CLOSE_LIGHTBOX" })

  const setLightboxPhotos = photos =>
    dispatch({ type: "SET_LIGHTBOX_PHOTOS", payload: photos })

  const value = useMemo(
    () => ({
      ...state,
      openLightbox,
      closeLightbox,
      setLightboxPhotos,
    }),
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const UIContextProvider = ({ children }) => (
  <UIProvider>{children}</UIProvider>
)
