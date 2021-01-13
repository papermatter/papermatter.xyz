import React, { useState } from 'react'
import {Logo, ExitIcon, BurgerIcon} from '../../Icons'
import { Div, Header, Button } from './styles'
import SocialMedia from '../../SocialMedia/SocialMedia'
import { Link } from 'gatsby'

export const BurgerMenu = ({children, color}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <Button onClick={toggleMenu}>
        <BurgerIcon color={color} />
      </Button>
    )
  }
  return (
    <Div>
      <Header>
        <Link to="/">
          <Logo size="1.8em" />
        </Link>
        <Button onClick={toggleMenu}>
          <ExitIcon />
        </Button>
      </Header>
      <div
        role="button"
        onClick={() => closeMenu()}
        onKeyDown={() => closeMenu()}
        tabIndex={0}
      >
        {children}
      </div>
      <SocialMedia />
    </Div>
  )
}

