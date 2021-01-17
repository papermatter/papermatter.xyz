import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/header"
import Footer from "../Footer/Footer"
import "../../../styles/main.css"
import { Main } from "./styles"
import { ContactForm } from "../ContactForm"
import { SITE_NAME } from "../../../lib/contants"

const Layout = ({ children, bgColor }) => {
  return (
    <>
      <Header bgColor={bgColor} siteTitle={SITE_NAME} />

      <Main bgColor={bgColor}>{children}</Main>
      <ContactForm />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
