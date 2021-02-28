import React from "react"
import styled from "styled-components"
import { CONTACT_EMAIL, CONTACT_TEL } from "../../../lib/contants"
import ExternalLink from "../../UI/ExternalLink"

import { BEHANCE_URL, INSTAGRAM_URL } from "../../../lib/contants"
import Behance from "../../Icons/Behance"
import Instagram from "../../Icons/Instragram"

const StyledFooter = styled.div`
  padding: 4rem 0;
  text-align: center;
  ul {
    margin: 0;
  }
  li {
    padding: 0.5rem 0;
  }
  .links {
    text-decoration: underline;
    color: var(--primary);
  }
  .info {
    padding: 3rem 0 2.5rem;
    color: var(--primary-60);
    font-size: var(--font-sm);
  }
  .social-media {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
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
        {/* <li>Política de privacidad</li> */}
      </ul>
      <ul className="info">
      <li>Ciudad de México · {CONTACT_TEL}</li>
        <li>(C) 2020 ThePaperMatter</li>
      </ul>
      <ul className="social-media">
        <li>
          <ExternalLink to={INSTAGRAM_URL} ariaLabel="Link to instagram">
            <Instagram />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink to={BEHANCE_URL} ariaLabel="Link to behance">
            <Behance />
          </ExternalLink>
        </li>
      </ul>
    </StyledFooter>
  )
}
