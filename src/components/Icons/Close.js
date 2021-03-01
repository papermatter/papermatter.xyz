import React from "react"

const Close = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
     <path d="M13.376 12l5.124 5.124-1.376 1.376L12 13.376 6.876 18.5 5.5 17.124 10.624 12 5.5 6.876 6.876 5.5 12 10.624 17.124 5.5 18.5 6.876 13.376 12z"/>
    </svg>
  )
}

export default Close
