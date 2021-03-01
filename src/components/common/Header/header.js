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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navRef = useRef(null)

  const { isHidden } = useHideOnScroll()

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
    <StyledHeader isHidden={isHidden}>
      <Link to="/" aria-label="link to home">
        <Logo width="48" height="48" />
      </Link>

      <StyledButton onClick={() => setIsOpen(true)} aria-label="Open nav">
        <Menu />
      </StyledButton>
    </StyledHeader>
  )
}

export default Header
