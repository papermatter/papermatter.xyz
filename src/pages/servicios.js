import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageHead } from "../components/common/PageHead"
import ServicesSection from "../components/sections/ServicesSection"
import PageCover from "../components/common/PageCover/PageCover"

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

      <PageCover
        src={data.strapiPageServices.cover.project_photo.childImageSharp.fluid}
        alt="Servicios cover"
      />

      <ServicesSection services={data.allStrapiServices.nodes} />
    </Layout>
  )
}

export default ServicesPage
