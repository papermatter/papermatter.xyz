import React from "react"
import styled from "styled-components"
import { CONTACT_EMAIL, CONTACT_TEL } from "../../../lib/contants"
import ExternalLink from "../../ui/ExternalLink"

import { BEHANCE_URL, INSTAGRAM_URL } from "../../../lib/contants"
import Behance from "../../Icons/Behance"
import Instagram from "../../Icons/Instragram"

const StyledFooter = styled.div`
  padding: 4rem 0 2rem;
  text-align: center;
  ul {
    padding: 1rem;
    margin: 0;
  }
  li {
    padding: 0.5rem 0;
  }
  .links {
    text-decoration: underline;
    color: var(--black);
  }
  .info {
    font-size: var(--font-sm);
  }
  .social-media {
    display: flex;
    justify-content: center;
    margin: 0;
    li {
      padding: 0.5rem 1rem;
    }
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <ul className="links">
        <li>
          <ExternalLink to={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </ExternalLink>
        </li>
        <li>Política de privacidad</li>
      </ul>
      <ul className="info">
        <li>Ciudad de México, México - {CONTACT_TEL}</li>
        <li>(C) 2020 ThePaperMatter</li>
      </ul>
      <ul className="social-media">
        <li>
          <ExternalLink to={INSTAGRAM_URL}>
            <Instagram />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink to={BEHANCE_URL}>
            <Behance />
          </ExternalLink>
        </li>
      </ul>
    </StyledFooter>
  )
}
