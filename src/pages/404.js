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
  h1 {
    font-weight: bold;
    font-size: var(--font-3xl);
    color: var(--text-secondary);
  }
  p {
    margin: 1rem;
    color: var(--text-secondary);
  }
  a {
    margin: 1rem auto;
    padding: 1rem 2rem;
    border: solid 1px var(--element-tertiary);
    width: max-content;
    text-decoration: underline;
    &:hover {
      opacity: 0.5;
    }
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
