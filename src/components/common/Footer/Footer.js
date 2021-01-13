import React from "react"
import styled from "styled-components"
import { CONTACT_EMAIL, CONTACT_TEL } from "../../../lib/contants"
import ExternalLink from "../../ui/ExternalLink"

import { BEHANCE_URL, INSTAGRAM_URL } from "../../../lib/contants"
import Behance from "../../Icons/Behance"
import Instagram from "../../Icons/Instragram"

const StyledFooter = styled.div`
  padding: 2em 0;
  border-top: 1px solid #0a3;
  text-align: center;
  li {
    font-size: 1em;
    margin-top: 0.5em;
  }
  .links {
    text-decoration: underline;
    color: #000;
    padding: 0.5rem 0;
  }
  .info {
    font-size: 0.875rem;
    padding: 0.5rem 0;
  }
  .social-media {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    li {
      padding: 0.5rem;
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
