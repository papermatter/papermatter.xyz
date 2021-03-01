import React from "react"

const Instagram = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm5-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
      <path d="M15.5 4.5c2.21 0 4 1.79 4 4v7c0 2.21-1.79 4-4 4h-7c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h7zm0-2h-7c-3.31 0-6 2.69-6 6v7c0 3.31 2.69 6 6 6h7c3.31 0 6-2.69 6-6v-7c0-3.31-2.69-6-6-6z" />
    </svg>
  )
}

export default Instagram
