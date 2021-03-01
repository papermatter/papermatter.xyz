import React from "react"

const Logo = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
       <path d="M23.5 1.958v21.084c0 .53-.429.958-.958.958H11.52l-9.584-9.583-.21-.211a.716.716 0 01.21-1.162.709.709 0 01.298-.065h8.327c.53 0 .959.429.959.959v8.624h10.541V2.438H1.938v8.865a.719.719 0 01-1.437 0V1.958A.956.956 0 011.458 1h21.084c.53 0 .958.429.958.958z" />
    </svg>
  )
}

export default Logo
