import React from 'react'

const ExternalLink = ({to, children, ariaLabel}) => {
  return (
    <a href={to} aria-label={ariaLabel} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default ExternalLink
