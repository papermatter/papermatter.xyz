import React, { useEffect, useState, useRef } from "react"
import Logo from "../../Icons/Logo"
import { Link } from "gatsby"
import Menu from "../../Icons/Menu"
import Close from "../../Icons/Close"
import ExternalLink from "../../UI/ExternalLink"
import { CONTACT_EMAIL } from "../../../lib/contants"
import { StyledHeader, StyledNav, StyledButton } from "./styles"
import { useHideOnScroll } from "../../../lib/hooks/use-hide-on-scroll"
import { useIsMobile } from "../../../lib/hooks/use-media-queries"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

const Header = ({ toggleHeaderColor }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [isBackgroundShowed, setIsBackgroundShowed] = useState(
    toggleHeaderColor ? false : true
  )

  const navRef = useRef(null)

  const { isHidden } = useHideOnScroll()

  const isMobile = useIsMobile()

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

  const onCloseClick = e => {
    e.preventDefault()
    setIsOpen(false)
  }

  if (isOpen) {
    return (
      <StyledNav ref={navRef}>
        <div className="nav-header">
          <Link to="/" aria-label="Link to home">
            <Logo width="48" height="48" />
          </Link>
          <StyledButton onClick={onCloseClick} aria-label="Close Nav">
            <Close />
          </StyledButton>
        </div>

        <nav>
          <Link onClick={onCloseClick} to="/">
            Inicio
          </Link>
          <Link onClick={onCloseClick} to="/portafolio">
            Portafolio
          </Link>
          <Link onClick={onCloseClick} to="/servicios">
            Servicios
          </Link>
          <Link onClick={onCloseClick} to="/nosotros">
            Nosotros
          </Link>
          <a onClick={onCloseClick} href="#contact-form">
            Contáctanos
          </a>
        </nav>

        {isMobile && (
          <ExternalLink
            to={`mailto:${CONTACT_EMAIL}`}
            className="contact-email"
          >
            {CONTACT_EMAIL}
          </ExternalLink>
        )}
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
