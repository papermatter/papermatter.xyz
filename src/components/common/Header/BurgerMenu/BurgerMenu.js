import React, { useState } from "react"
import { Logo, ExitIcon, BurgerIcon } from "../../../Icons"
import { Div, Header, Button } from "./styles"
import { Link } from "gatsby"
import ExternalLink from "../../../ui/ExternalLink"
import { CONTACT_EMAIL } from "../../../../lib/contants"

export const BurgerMenu = ({ children, color }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
      {children}
      <ExternalLink to={`mailto:${CONTACT_EMAIL}`} className="contact-email">
        {CONTACT_EMAIL}
      </ExternalLink>
    </Div>
  )
}
