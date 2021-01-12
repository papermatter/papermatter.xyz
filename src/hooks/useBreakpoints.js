import React, { createContext, useState, useEffect, useContext } from 'react'


const defaultValue = {};

const BreackpointContext = createContext(defaultValue)

const BreackpointProvider = ({children, queries}) => {
  const [queryMatch, setQueryMatch] = useState({})

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches)
        return acc
      }, {})
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches = {};
      keys.forEach(media => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media])
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      })
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach(media => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener)
        }
      })
    }

    return () => {
      if (isAttached) {
        keys.forEach(media => {
          if(typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener)
          }
        })
      }
    }
  }, [queries])

  return (
    <BreackpointContext.Provider value={queryMatch}>
      {children}
    </BreackpointContext.Provider>
  )
}

function useBreakpoint() {
  const context = useContext(BreackpointContext);
  if (context === defaultValue) {
    throw new Error("useBreakpoint must be used within BreakpointProvider")
  }
  return context
}

export {useBreakpoint, BreackpointProvider}
