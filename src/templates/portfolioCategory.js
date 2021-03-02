import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"
import PortfolioContainer from "../components/Portfolio/PortfolioContainer"
import PortfolioNav from "../components/Portfolio/PortfolioNav"

export const portfolioQuery = graphql`
  query GET_SERVICE_IMAGES($slug: String!) {
    allStrapiServices {
      nodes {
        slug
        title
        description
      }
    }
    allStrapiProjects(filter: { service: { slug: { eq: $slug } } }) {
      nodes {
        id
        slug
        location
        description
        title
        client {
            name
            url
          }
        service {
          slug
          title
        }
        cover {
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

export default function portafolio({ data }) {
  return (
    <Layout>
      <SEO title="Portafolio" />
      <PageCover
        pageName="Portafolio"
        heading={data.strapiPagePortfolio.heading}
      />

      <PortfolioNav categories={data.allStrapiServices.nodes} />

      <PortfolioContainer images={data.allStrapiImages.nodes} />
    </Layout>
  )
}
