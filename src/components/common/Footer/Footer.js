import React from "react"
import styled from "styled-components"
import SocialMedia from "../SocialMedia/SocialMedia"

const Div = styled.div`
  padding: 4em 2em 1em;
  border-top: 1px solid #0a3;
  & p {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
`

export default function Footer() {
  return (
    <Div>
      <ul>
        <li>info@thepapermatter.com</li>
        <li>Política de privacidad</li>
        <li>Ciudad de México, México </li>
        <li>5511223344</li>
        <li>(C) 2020 ThePaperMatter</li>
      </ul>
      <div style={{padding: '64px 0'}}>
        <SocialMedia />
      </div>
    </Div>
  )
}
