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

  console.log("hola")

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)}>
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
        <Button onClick={() => setIsOpen(false)}>
          <Close />
        </Button>
      </Header>
      <nav onClick={() => setIsOpen(false)}>{children}</nav>
      <ExternalLink to={`mailto:${CONTACT_EMAIL}`} className="contact-email">
        {CONTACT_EMAIL}
      </ExternalLink>
    </Div>
  )
}
