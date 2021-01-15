import React from "react"
import {
  StyledContainer,
  StyledForm,
  StyledButton,
  Label,
  StyledTextarea,
} from "./styles"
import Heading from "../../ui/Heading/Heading"

export default function ContactForm() {
  return (
    <StyledContainer id="contact-form">
      <Heading>¿Algo en mente?</Heading>
      <Heading>Hablemos</Heading>
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
