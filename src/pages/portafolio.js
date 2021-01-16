import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
// import PortfolioContainer from "../components/portfolio/PortfolioContainer"
import { PageCover } from "../components/common/PageCover"

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

      {/* <PortfolioContainer categories={data.allStrapiServices.nodes} /> */}
    </Layout>
  )
}
