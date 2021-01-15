import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { PageCover } from "../components/common/PageCover"
import AboutSection from "../components/sections/AboutSection"

import withLocation from "../components/HoC/withLocation"
// import Slideshow from "../components/Slideshow/Slideshow"

export const aboutQuery = graphql`
  query GET_ABOUT_US {
    strapiAboutUs {
      heading
      goal {
        description
        heading
      }
      experience {
        description
        heading
      }
      location {
        description
        heading
      }
    }
  }
`

const AboutPage = ({ data: { strapiAboutUs: data } }) => {
  return (
    <>
      <Layout>
        <SEO title="Nosotros" />
        <PageCover pageName="nosotros" heading={data.heading} />

        <AboutSection
          heading={data.goal.heading}
          description={data.goal.description}
        >
          <div>Hola</div>
        </AboutSection>

        <AboutSection
          heading={data.experience.heading}
          description={data.experience.description}
        >
          <div>Hola</div>
        </AboutSection>

        <AboutSection
          heading={data.location.heading}
          description={data.location.description}
        >
          <div>Hola</div>
        </AboutSection>

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
          <p>{data.strapiPageAbout.description}</p> */}
      </Layout>
    </>
  )
}

export default withLocation(AboutPage)
