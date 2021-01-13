import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  StyledContainer,
  StyledForm,
  StyledButton,
  Label,
  StyledTextarea,
} from "./styles"
import { Title } from "../../ui/Title"

export default function ContactForm() {
  const data = useStaticQuery(graphql`
    query FORM_QUERY {
      allStrapiContactForm {
        edges {
          node {
            title {
              title_black
              title_italic
            }
          }
        }
      }
    }
  `)
  return (
    <StyledContainer id="contact-form">
      <Title data={data.allStrapiContactForm.edges[0].node.title[0]} />
      <StyledForm>
        <div id="nameContainer">
          <Label htmlFor="name">Nombre</Label>
          <input id="name" type="text" placeholder=" " />
        </div>
        <div id="emailContainer">
          <input id="email" type="email" placeholder=" " />
          <Label htmlFor="email">Correo electrónico</Label>
        </div>
        <div id="telContainer">
          <input id="tel" type="tel" name="tel" placeholder=" " />
          <Label htmlFor="tel">Teléfono</Label>
        </div>
        <StyledTextarea id="messageContainer">
          <textarea id="message" name="message" placeholder=" " />
          <Label htmlFor="message">Escribe un mensaje</Label>
        </StyledTextarea>
        <StyledButton>Enviar</StyledButton>
      </StyledForm>
    </StyledContainer>
  )
}
