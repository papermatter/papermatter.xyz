import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { PageCover } from "../components/common/PageCover"
import AboutSection from "../components/sections/AboutSection"
import ClientsSlider from "../components/sections/ClientsSlider"

import withLocation from "../components/HoC/withLocation"
import Img from "gatsby-image"

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
      cover {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allStrapiClients {
      nodes {
        id
        url
        name
        logo {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AboutPage = ({ data: { strapiAboutUs: data, allStrapiClients } }) => {
  return (
    <>
      <Layout>
        <SEO title="Nosotros" />
        <PageCover pageName="nosotros" heading={data.heading} />

        <Img
          fluid={data.cover.childImageSharp.fluid}
          style={{ margin: "0 -1.5rem 8rem" }}
        />

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
          <ClientsSlider clients={allStrapiClients.nodes} />
        </AboutSection>

        <AboutSection
          heading={data.location.heading}
          description={data.location.description}
        >
          <div>Hola</div>
        </AboutSection>
      </Layout>
    </>
  )
}

export default withLocation(AboutPage)
