import React, { useState } from "react"
import { Logo } from "../../Icons"
import { Link } from "gatsby"
import Menu from "../../Icons/Menu"
import Close from "../../Icons/Close"
import ExternalLink from "../../UI/ExternalLink"
import { CONTACT_EMAIL } from "../../../lib/contants"
import { StyledHeader, StyledNav, StyledButton } from "./styles"
import { useHideOnScroll } from "../../../lib/hooks/use-hide-on-scroll"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { isHidden } = useHideOnScroll()

  if (isOpen) {
    return (
      <StyledNav onClick={() => setIsOpen(false)}>
        <StyledHeader>
          <Link to="/" aria-label="Link to home">
            <Logo size="1.8em" />
          </Link>
          <StyledButton onClick={() => setIsOpen(false)} aria-label="Close Nav">
            <Close />
          </StyledButton>
        </StyledHeader>

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
        <Logo size="1.8em" color="currentColor" />
      </Link>

      <StyledButton onClick={() => setIsOpen(true)} aria-label="Open nav">
        <Menu />
      </StyledButton>
    </StyledHeader>
  )
}

export default Header
