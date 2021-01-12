import React, { useState, useEffect } from 'react'
import { ArrowLeftIcon } from '../Icons'
import { Link } from 'gatsby'
import { StyledNav } from './styles'
import { useBreakpoint } from '../../hooks/useBreakpoints'

export default function Nav({data, title}) {
  const [isActive, setIsActive] = useState(false)
  const breakpoints = useBreakpoint();

  const toogleTitle = () => {    
    if(window.scrollY > 110) {
      setIsActive(true)
    } else{
      setIsActive(false)
    }
  }

  useEffect(() => {
    if (breakpoints.tablet) {
      window.addEventListener('scroll', toogleTitle)
    }
    return () => {
      window.removeEventListener("scroll", toogleTitle)
    }
  }, [breakpoints])
  return (
    <StyledNav>
      <Link to="/portafolio">
        <ArrowLeftIcon size="2.5em" />
      </Link>
      <div className={"routes-nav"}>
        <Link to="/portafolio">Portafolio </Link>
        <Link to={`/portafolio?category=${data.slug}`}> {data.name}</Link>
      </div>
      {isActive && <h1>{title}</h1>}
    </StyledNav>
  )
} 