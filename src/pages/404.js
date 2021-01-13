import React from "react"

import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { LinkComponent } from "../components/ui/LinkComponent"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{margin: "12em auto 10em", textAlign: "center"}}>
      <h1>404.</h1>
      <p>Lo sentimos, no pudimos encontrar lo que estabas buscando.</p>
      <LinkComponent to='/'>Regresa al inicio</LinkComponent>
    </div>
  </Layout>
)

export default NotFoundPage
