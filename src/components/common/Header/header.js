import React from "react"
import { Logo } from "../../Icons"
import { StyledHeader, StyledDesktopNav } from "./styles"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import { useBreakpoint } from "../../../lib/hooks/useBreakpoints"
import { Link } from "gatsby"

const Header = ({ bgColor }) => {
  const breakpoints = useBreakpoint()

  const Nav = () => (
    <nav>
      <Link to="/portafolio">Portafolio</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/nosotros#contact-form">Contactanos</Link>
    </nav>
  )

  return (
    <StyledHeader bgColor={bgColor}>
      <Link to="/">
        <Logo size="1.8em" />
      </Link>

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
