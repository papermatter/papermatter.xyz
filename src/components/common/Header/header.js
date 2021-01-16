import React from "react"
import { Logo } from "../../Icons"
import { StyledHeader, StyledDesktopNav } from "./styles"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import { useBreakpoint } from "../../../lib/hooks/useBreakpoints"
import { Link } from "gatsby"

const Header = ({ bgColor }) => {
  const breakpoints = useBreakpoint()

  const Links = () => (
    <>
      {!breakpoints.tablet && <Link to="/">Inicio</Link>}
      <Link to="/portafolio">Portafolio</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/nosotros">Nosotros</Link>
      <a href="#contact-form">Contáctanos</a>
    </>
  )

  return (
    <StyledHeader bgColor={bgColor}>
      <Link to="/">
        <Logo size="1.8em" color={"currentColor"} />
      </Link>

      {breakpoints.tablet ? (
        <StyledDesktopNav>
          <nav>
            <Links />
          </nav>
        </StyledDesktopNav>
      ) : (
        <BurgerMenu>
          <Links />
        </BurgerMenu>
      )}
    </StyledHeader>
  )
}

export default Header
