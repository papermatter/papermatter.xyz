import React from "react"
import ArrowsDivider from "../../ui/ArrowsDivider"
import {
  StyledContainer,
  StyledForm,
  StyledButton,
  StyledTextarea,
} from "./styles"

export default function ContactForm() {
  return (
    <StyledContainer id="contact-form">
      <h4>¿Algo en mente?</h4>
      <h4>Hablemos</h4>

      <ArrowsDivider />
      <StyledForm>
        <div id="nameContainer">
          <input id="name" type="text" placeholder=" " />
          <label htmlFor="name">Nombre</label>
        </div>
        <div id="emailContainer">
          <input id="email" type="email" placeholder=" " />
          <label htmlFor="email">Correo electrónico</label>
        </div>
        <div id="telContainer">
          <input id="tel" type="tel" name="tel" placeholder=" " />
          <label htmlFor="tel">Teléfono</label>
        </div>
        <StyledTextarea id="messageContainer">
          <textarea id="message" name="message" placeholder=" " />
          <label htmlFor="message">Escribe un mensaje</label>
        </StyledTextarea>
        <StyledButton>Enviar</StyledButton>
      </StyledForm>
    </StyledContainer>
  )
}
