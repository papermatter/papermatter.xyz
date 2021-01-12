import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {Header, Footer} from '../../components'
import "./normalize.css"
import "./layout.css"
import { Main } from "./styles"
import ContactForm from "../ContactForm/ContactForm"
// import SocialMediaWidget from "../SocialMedia/SocialMediaWidget"
// import QuickNav from "../QuickNav/QuickNav"

const Layout = ({ children, backgroundColor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      } 
    }
  `)

  return (
    <>
      <Header
        backgroundColor={backgroundColor}
        siteTitle={data.site.siteMetadata.title}
      />

      <Main backgroundColor={backgroundColor}>
        <>
          {children}
          {/* {breakpoints.laptop ? (
            <>
              <QuickNav />
              <SocialMediaWidget />
            </>
          ) : null} */}
        </>
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
