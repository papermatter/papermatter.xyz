import React from "react"

const ChevronUp = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.005 8.5l6.495 4.348-1.1 1.652-5.395-3.612L6.601 14.5 5.5 12.848 12.005 8.5z" />
    </svg>
  )
}

export default ChevronUp