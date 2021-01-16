import React from "react"
import SEO from "../components/common/seo"
import { Link } from "gatsby"
import styled from "styled-components"

const Styled404 = styled.main`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 90vh;
  a {
    margin-top: 3rem;
    text-decoration: underline;
  }
`

const NotFoundPage = () => (
  <Styled404>
    <SEO title="404: Not found" />
    <h1>404.</h1>
    <p>Lo sentimos, no pudimos encontrar lo que estabas buscando.</p>
    <Link to="/">regresa al inicio</Link>
  </Styled404>
)

export default NotFoundPage
