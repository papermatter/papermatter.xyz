import React, { useState, useRef, useEffect } from "react"
import ArrowsDivider from "../../UI/ArrowsDivider"
import {
  StyledContainer,
  StyledForm,
  StyledButton,
  StyledTextarea,
} from "./styles"

export default function ContactForm() {
  const [message, setMessage] = useState("")

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const telRef = useRef(null)
  const messageRef = useRef(null)

  const sendEmail = async e => {
    e.preventDefault()

    if (!nameRef.current.value) {
      setMessage("El nombre es requerido")
      return
    }
    if (!emailRef.current.value) {
      setMessage("El correo electrónico es requerido")
      return
    }
    if (!telRef.current.value) {
      setMessage("El teléfono es requerido")
      return
    }
    if (!messageRef.current.value) {
      setMessage("El mensaje es requerido")
      return
    }

    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: nameRef.current.value,
    //     email: emailRef.current.value,
    //     tel: telRef.current.value,
    //     message: messageRef.current.value,
    //   }),
    // })

    // const { error } = await res.json()

    // if (error) {
    //   setMessage(error)
    //   return
    // }

    messageRef.current.value = ""
    nameRef.current.value = ""
    telRef.current.value = ""
    emailRef.current.value = ""
    setMessage("Se envió el correo exitosamente.")
  }

  useEffect(() => {
    // Early return when message is empty.
    if (!message) return

    const timer = setTimeout(() => {
      setMessage("")
    }, 15000)

    return () => clearTimeout(timer)
  }, [message])

  return (
    <StyledContainer id="contact-form">
      <h4>¿Algo en mente?</h4>
      <h4>Hablemos</h4>

      <ArrowsDivider />
      <StyledForm onSubmit={sendEmail}>
        <div id="nameContainer">
          <input ref={nameRef} id="name" type="text" placeholder=" " />
          <label htmlFor="name">Nombre</label>
        </div>
        <div id="emailContainer">
          <input ref={emailRef} id="email" type="email" placeholder=" " />
          <label htmlFor="email">Correo electrónico</label>
        </div>
        <div id="telContainer">
          <input ref={telRef} id="tel" type="tel" name="tel" placeholder=" " />
          <label htmlFor="tel">Teléfono</label>
        </div>
        <StyledTextarea id="messageContainer">
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            placeholder=" "
          />
          <label htmlFor="message">Escribe un mensaje</label>
        </StyledTextarea>
        <StyledButton type="submit">Enviar</StyledButton>
      </StyledForm>
      {message && <p>{message}</p>}
    </StyledContainer>
  )
}
