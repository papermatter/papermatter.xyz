import React, { useState } from "react"
import { Logo } from "../../../Icons"
import { Div, Header, Button } from "./styles"
import { Link } from "gatsby"
import ExternalLink from "../../../UI/ExternalLink"
import { CONTACT_EMAIL } from "../../../../lib/contants"
import Menu from "../../../Icons/Menu"
import Close from "../../../Icons/Close"

export const BurgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)}>
        <Menu />
      </Button>
    )
  }
  return (
    <Div onClick={() => setIsOpen(false)}>
      <Header>
        <Link to="/">
          <Logo size="1.8em" />
        </Link>
        <Button onClick={() => setIsOpen(false)}>
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
