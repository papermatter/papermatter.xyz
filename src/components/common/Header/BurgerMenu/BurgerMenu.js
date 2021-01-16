import React, { useState } from "react"
import { Logo } from "../../../Icons"
import { Div, Header, Button } from "./styles"
import { Link } from "gatsby"
import ExternalLink from "../../../ui/ExternalLink"
import { CONTACT_EMAIL } from "../../../../lib/contants"
import Menu from "../../../Icons/Menu"
import Close from "../../../Icons/Close"

export const BurgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  if (!isOpen) {
    return (
      <Button onClick={toggleMenu}>
        <Menu />
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
          <Close />
        </Button>
      </Header>
      {children}
      <ExternalLink to={`mailto:${CONTACT_EMAIL}`} className="contact-email">
        {CONTACT_EMAIL}
      </ExternalLink>
    </Div>
  )
}
