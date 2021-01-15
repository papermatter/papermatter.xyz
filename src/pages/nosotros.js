import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"

import withLocation from "../components/HoC/withLocation"
// import Slideshow from "../components/Slideshow/Slideshow"
// import AboutPageCover from "../components/common/PageCover/AboutPageCover"
// import { useBreakpoint } from "../lib/hooks/useBreakpoints"
import { PageCover } from "../components/common/PageCover"

export const aboutQuery = graphql`
  query GET_ABOUT_US {
    strapiPageAboutUs {
      heading
    }
  }
`

const AboutPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Nosotros" />
        <PageCover
          pageName="nosotros"
          heading={data.strapiPageAboutUs.heading}
        />

        {/* <Slideshow time="30">
            <>
              <h3>¿De dónde venimos?</h3>
              <h3>¿Quiénes somos?</h3>
              <h3>¿Qué hacemos?</h3>
              <h3>¿Cómo te podemos ayudar?</h3>
              <h3>¿Qué queremos?</h3>
            </>
          </Slideshow>
          {!breakpoints.tablet && (
            <>
              <Slideshow time="20" start="even">
                <>
                  <h3>¿Qué hacemos?</h3>
                  <h3>¿Cómo te podemos ayudar?</h3>
                  <h3>¿Quiénes somos?</h3>
                  <h3>¿Qué queremos?</h3>
                  <h3>¿De dónde venimos?</h3>
                </>
              </Slideshow>
              <Slideshow time="35">
                <>
                  <h3>¿Qué queremos?</h3>
                  <h3>¿Qué podemos hacer?</h3>
                  <h3>¿De dónde venimos?</h3>
                  <h3>¿Qué hacemos?</h3>
                  <h3>¿Quiénes somos?</h3>
                </>
              </Slideshow>
            </>
          )}
          <p>{data.strapiPageAbout.description}</p>
        <DescriptionList data={data.strapiPageAbout.description_list} />
        <Clients title={data.strapiPageAbout.clients_title} /> */}
      </Layout>
    </>
  )
}

export default withLocation(AboutPage)
