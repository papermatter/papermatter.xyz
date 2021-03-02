import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageHead } from "../components/common/PageHead"
import ServicesSection from "../components/sections/ServicesSection"
import Img from "gatsby-image"

export const query = graphql`
  query GET_SERVICES {
    strapiPageServices {
      heading
      description
      cover {
        alt
        project_photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiServices {
      nodes {
        id
        title
        slug
        description
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ServicesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Servicios" />
      <PageHead
        pageName="Servicios"
        heading={data.strapiPageServices.heading}
        description={data.strapiPageServices.description}
      />

      <Img
        fluid={
          data.strapiPageServices.cover.project_photo.childImageSharp.fluid
        }
        alt={data.strapiPageServices.cover.alt}
        style={{ margin: "0 -1.5rem" }}
      />

      <ServicesSection services={data.allStrapiServices.nodes} />
    </Layout>
  )
}

export default ServicesPage
