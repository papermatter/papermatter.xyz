import React from "react"

import LogoSvg from "../../assets/logo.svg"

export const Logo = ({ color = "#131414", size = "2em" }) => {
  return (
    <LogoSvg
      style={{
        fill: color,
        width: size,
      }}
    />
  )
}
