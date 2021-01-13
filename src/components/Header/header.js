import React, { useEffect, useState } from "react"
import {Logo} from '../Icons'
import {StyledHeader, StyledLink, StyledDesktopNav} from './styles'
import {BurgerMenu} from './BurgerMenu/BurgerMenu'
import { colors } from "../../styles/Vars"
import { useBreakpoint } from "../../lib/hooks/useBreakpoints"

const Header = ({backgroundColor = 'white'}) => {
  const [burgerIconColor, setburgerIconColor] = useState(colors.black)
  const [textColor, setTextColor] = useState(colors.gray)
  const [activeColor, setActiveColor] = useState(colors.black)
  const breakpoints = useBreakpoint()

  useEffect(() => {
    backgroundColor === colors.black
      ? setburgerIconColor(colors.white)
      : setburgerIconColor(colors.black)

    backgroundColor === colors.gray
      ? setTextColor(colors.darkGray)
      : setTextColor(colors.gray)

    backgroundColor === colors.black
      ? setActiveColor(colors.white)
      : setActiveColor(colors.black)
  }, [backgroundColor])

  const Nav = () => (
    <nav>
      <StyledLink color={textColor} activecolor={activeColor} to="/portafolio">Portafolio</StyledLink>
      <StyledLink color={textColor} activecolor={activeColor} to="/servicios">Servicios</StyledLink>
      <StyledLink color={textColor} activecolor={activeColor} to="/nosotros">Nosotros</StyledLink>
      <StyledLink color={activeColor} activecolor={activeColor} to="/nosotros#contact-form">Contactanos</StyledLink>
    </nav>
  )

  return (
    <StyledHeader backgroundColor={backgroundColor}>
      <StyledLink activecolor={activeColor} to="/">
        <Logo color={breakpoints.tablet ? textColor : burgerIconColor} size="1.8em" />
      </StyledLink>
      {breakpoints.tablet ? (
        <StyledDesktopNav color={textColor}>
          <Nav />
        </StyledDesktopNav>
      ) : (
        <BurgerMenu color={burgerIconColor}>
          <Nav />
        </BurgerMenu>
      )}
    </StyledHeader>
  )
}

export default Header;