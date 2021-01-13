import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledContainer, StyledContactInfo, StyledForm, StyledButton, Label, StyledTextarea } from "./styles";
import {Title} from '../ui/Title'
import {TitleWithDescription} from "../ui/TitleWithDescription";
import { colors } from "../../styles/Vars";

export default function ContactForm () {
  const data = useStaticQuery(graphql`
    query FORM_QUERY {
      allStrapiContactForm {
        edges {
          node {
            title {
              title_black
              title_italic
            }
            phone
            email
            adress
          }
        }
      }
    }
  `)
  return (
    <StyledContainer id="contact-form">
      <TitleWithDescription>
        <Title data={data.allStrapiContactForm.edges[0].node.title[0]} />
        <StyledContactInfo>
          <div>
            <h6>TELÉFONO</h6>
            <p style={{color: colors.black}}>{data.allStrapiContactForm.edges[0].node.phone}</p>
          </div>
          <div>
            <h6>CORREO</h6>
            <p style={{color: colors.black}}>{data.allStrapiContactForm.edges[0].node.email}</p>
          </div>
          <div>
            <h6>DIRECCIÓN</h6>
            <p style={{color: colors.black}}>{data.allStrapiContactForm.edges[0].node.adress}</p>
          </div>
        </StyledContactInfo>
      </TitleWithDescription>
      <StyledForm>
        <div id='nameContainer'>
          <input id="name" type="text" placeholder=" " />
          <Label htmlFor="name">Nombre</Label>
        </div>
        <div id='emailContainer'>
          <input id="email" type="email" placeholder=" " />
          <Label htmlFor="email">Correo electrónico</Label>
        </div>
        <div id='telContainer'>
          <input id="tel" type="tel" name="tel" placeholder=" " />
          <Label htmlFor="tel">Teléfono</Label>
        </div>
        <StyledTextarea id='messageContainer'>
          <textarea
            id="message"
            name="message"
            placeholder=" "
          ></textarea>
          <Label htmlFor="message">Escribe un mensaje</Label>
        </StyledTextarea>
        <StyledButton>Enviar</StyledButton>
      </StyledForm>
    </StyledContainer>
  )
}