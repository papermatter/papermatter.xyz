import React from "react"

const ChevronDown = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
       <path d="M11.995 15.5L5.5 11.152 6.6 9.5l5.395 3.612L17.399 9.5l1.101 1.652-6.505 4.348z" />
    </svg>
  )
}

export default ChevronDown
