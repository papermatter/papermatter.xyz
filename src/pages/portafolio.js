import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageHead } from "../components/common/PageHead"
import ProjectCardsContainer from "../components/project/ProjectCardsContainer"
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
    allStrapiProjects {
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

      <PageHead
        pageName="Portafolio"
        heading={data.strapiPagePortfolio.heading}
        style={{ height: "85vh" }}
      />

      <PortfolioNav categories={data.allStrapiServices.nodes} />

      <ProjectCardsContainer projects={data.allStrapiProjects.nodes} />
    </Layout>
  )
}
