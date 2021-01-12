import React from 'react'

import HamburgerIcon from "../../assets/hamburger_icon.svg"
import LogoSvg from "../../assets/logo.svg"
import ExitIconSvg from '../../assets/exit_icon.svg'
import ArrowDownIconSvg from '../../assets/arrow_down.svg'
import ArrowLeftIconSvg from '../../assets/arrow_left.svg'
import ArrowRightIconSvg from "../../assets/arrow_right.svg"


export const BurgerIcon = ({color = '#131414', size = '2em'}) => {
  return (
    <HamburgerIcon
      style={{
        fill: color,
        width: size,
      }}
    />
  )
}

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

export const ExitIcon = ({ color = "#131414", size = "2em" }) => {
  return (
    <ExitIconSvg
      style={{
        fill: color,
        width: size,
      }}
    />
  )
}

export const ArrowDownIcon = ({ color = "#131414", size = "2em" }) => {
  return (
    <ArrowDownIconSvg
      style={{
        fill: color,
        width: size,
      }}
    />
  )
}

export const ArrowLeftIcon = ({ color = "#131414", size = "2em" }) => {
  return (
    <ArrowLeftIconSvg
      style={{
        fill: color,
        width: size,
      }}
    />
  )
}

export const ArrowRightIcon = ({ color = "#131414", size = "2em" }) => {
  return (
    <ArrowRightIconSvg
      style={{
        fill: color,
        width: size,
      }}
    />
  )
}