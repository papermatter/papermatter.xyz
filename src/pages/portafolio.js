import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"
import PortfolioContainer from "../components/Portfolio/PortfolioContainer"
import PortfolioNav from "../components/Portfolio/PortfolioNav"

export const portfolioQuery = graphql`
  query GET_PORTFOLIO {
    strapiPagePortfolio {
      heading
    }
    allStrapiServices {
      nodes {
        slug
        title
      }
    }
    allStrapiImages {
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

export default function portafolio({ data, location }) {
  console.log(location)
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
