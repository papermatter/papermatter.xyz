import React from "react"
import { Logo } from "../../Icons"
import { StyledHeader, StyledLink, StyledDesktopNav } from "./styles"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import { useBreakpoint } from "../../../lib/hooks/useBreakpoints"

const Header = ({ bgColor }) => {
  const breakpoints = useBreakpoint()

  const Nav = () => (
    <nav>
      <StyledLink to="/portafolio">Portafolio</StyledLink>
      <StyledLink to="/servicios">Servicios</StyledLink>
      <StyledLink to="/nosotros">Nosotros</StyledLink>
      <StyledLink to="/nosotros#contact-form">Contactanos</StyledLink>
    </nav>
  )

  return (
    <StyledHeader bgColor={bgColor}>
      <StyledLink to="/">
        <Logo size="1.8em" />
      </StyledLink>
      {breakpoints.tablet ? (
        <StyledDesktopNav>
          <Nav />
        </StyledDesktopNav>
      ) : (
        <BurgerMenu>
          <Nav />
        </BurgerMenu>
      )}
    </StyledHeader>
  )
}

export default Header
