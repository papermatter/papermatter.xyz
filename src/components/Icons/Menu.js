import React from "react"

const Menu = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
     <path d="M21.5 6h-19v2h19V6zm0 10h-19v2h19v-2zm0-5h-19v2h19v-2z" />
    </svg>
  )
}

export default Menu
