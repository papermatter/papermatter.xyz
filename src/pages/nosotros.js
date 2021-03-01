import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { PageCover } from "../components/common/PageCover"
import AboutSection from "../components/sections/AboutSection"
import ExpirienceSection from "../components/sections/ExpirienceSection"
import ImagesSlider from "../components/sections/ImagesSlider"

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
    allStrapiImages(limit: 4) {
      nodes {
        id
        title
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AboutPage = ({
  data: { strapiAboutUs: data, allStrapiClients, allStrapiImages },
}) => {
  return (
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
      />
      
      <ImagesSlider images={allStrapiImages.nodes.slice(2, 4)} />

      <ExpirienceSection
        heading={data.experience.heading}
        description={data.experience.description}
        clients={allStrapiClients.nodes}
      />
      
      <AboutSection
        heading={data.location.heading}
        description={data.location.description}
      />

    </Layout>
  )
}

export default AboutPage
