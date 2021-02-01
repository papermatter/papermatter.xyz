import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"
import PortfolioContainer from "../components/Portfolio/PortfolioContainer"
import PortfolioNav from "../components/Portfolio/PortfolioNav"

export const portfolioQuery = graphql`
  query GET_SERVICE_IMAGES($slug: String!) {
    strapiPagePortfolio {
      heading
    }
    allStrapiServices {
      nodes {
        slug
        title
      }
    }
    allStrapiImages(filter: { service: { slug: { eq: $slug } } }) {
      nodes {
        id
        title
        client {
          name
          url
        }
        image {
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
