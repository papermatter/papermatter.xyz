import React, { useEffect, useState } from "react"
import { Logo } from "../../Icons"
import { StyledHeader, StyledDesktopNav } from "./styles"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import { useBreakpoint } from "../../../lib/hooks/useBreakpoints"
import { Link } from "gatsby"

const Header = ({ bgColor = "var(--white)" }) => {
  const breakpoints = useBreakpoint()

  const [isShowed, setIsShowed] = useState(false)

  const showText = () => {
    if (window.scrollY > 150) {
      setIsShowed(true)
    } else {
      setIsShowed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showText)
    return () => {
      window.removeEventListener("scroll", showText)
    }
  }, [])

  const Nav = () => (
    <nav>
      {!breakpoints.tablet && <Link to="/">Inicio</Link>}
      <Link to="/portafolio">Portafolio</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/nosotros#contact-form">Contactanos</Link>
    </nav>
  )

  return (
    <StyledHeader
      bgColor={bgColor}
      style={{ background: isShowed ? bgColor : "transparent" }}
    >
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
