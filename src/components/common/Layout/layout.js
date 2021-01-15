import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./normalize.css"
import "./layout.css"
import { Main } from "./styles"
import { ContactForm } from "../ContactForm"
import { SITE_NAME } from "../../../lib/contants"

const Layout = ({ children, backgroundColor }) => {
  return (
    <>
      <Header backgroundColor={backgroundColor} siteTitle={SITE_NAME} />

      <Main backgroundColor={backgroundColor}>
        <>{children}</>
      </Main>
      <ContactForm />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
