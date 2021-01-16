import React from "react"

const ExternalLink = ({ to, children, ariaLabel, className }) => {
  return (
    <a
      href={to}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export default ExternalLink
