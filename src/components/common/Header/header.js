import React, { useEffect, useState, useRef } from "react"
import Logo from "../../Icons/Logo"
import { Link } from "gatsby"
import Menu from "../../Icons/Menu"
import Close from "../../Icons/Close"
import ExternalLink from "../../UI/ExternalLink"
import { CONTACT_EMAIL } from "../../../lib/contants"
import { StyledHeader, StyledNav, StyledButton } from "./styles"
import { useHideOnScroll } from "../../../lib/hooks/use-hide-on-scroll"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import { useBreakpoint } from "../../../lib/hooks/useBreakpoints"

const Header = ({ toggleHeaderColor }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [isBackgroundShowed, setIsBackgroundShowed] = useState(
    toggleHeaderColor ? false : true
  )

  const navRef = useRef(null)

  const { isHidden } = useHideOnScroll()
  const breakpoints = useBreakpoint()

  useEffect(() => {
    if (navRef.current) {
      if (isOpen) {
        disableBodyScroll(navRef.current)
      } else {
        enableBodyScroll(navRef.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  useEffect(() => {
    if (!toggleHeaderColor) return

    const showBackground = () => {
      if (window.scrollY > 200) {
        setIsBackgroundShowed(true)
      } else {
        setIsBackgroundShowed(false)
      }
    }

    window.addEventListener("scroll", showBackground)
    return () => {
      window.removeEventListener("scroll", showBackground)
    }
  }, [toggleHeaderColor])

  if (isOpen) {
    return (
      <StyledNav onClick={() => setIsOpen(false)} ref={navRef}>
        <div className="nav-header">
          <Link to="/" aria-label="Link to home">
            <Logo width="48" height="48" />
          </Link>
          <StyledButton onClick={() => setIsOpen(false)} aria-label="Close Nav">
            <Close />
          </StyledButton>
        </div>

        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/portafolio">Portafolio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/nosotros">Nosotros</Link>
          <a href="#contact-form">Contáctanos</a>
        </nav>

        <ExternalLink to={`mailto:${CONTACT_EMAIL}`} className="contact-email">
          {CONTACT_EMAIL}
        </ExternalLink>
      </StyledNav>
    )
  }

  return (
    <StyledHeader
      isHidden={isHidden}
      className={isBackgroundShowed ? "" : "no-background"}
    >
      <Link to="/" aria-label="link to home">
        <Logo width="48" height="48" />
      </Link>

      <a className="contact-link" href="#contact-form">
        contáctanos
      </a>

      <StyledButton onClick={() => setIsOpen(true)} aria-label="Open nav">
        <Menu />
      </StyledButton>
    </StyledHeader>
  )
}

export default Header
