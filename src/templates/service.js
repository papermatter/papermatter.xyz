import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"
import PortfolioNav from "../components/Portfolio/PortfolioNav"

export const portfolioQuery = graphql`
  query GET_SERVICE($slug: String!) {
    allStrapiServices {
      nodes {
        slug
        title
        description
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
        pageName="Servicios/"
        heading={'OG STill images'}
        style={{height: '70vh'}}
      />
  
      <PortfolioNav categories={data.allStrapiServices.nodes} />

    </Layout>
  )
}
