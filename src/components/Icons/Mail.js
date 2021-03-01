import React from "react"

const Mail = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
     <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.8 2L12 10.8 4.8 6h14.4zM21 18H3V7.2l8.45 5.63c.16.11.36.17.55.17.19 0 .39-.06.55-.17L21 7.2V18z" />
    </svg>
  )
}

export default Mail
