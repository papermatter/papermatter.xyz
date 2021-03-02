import React from "react"
import { Layout } from "../components/common/Layout"
import { PageHead } from "../components/common/PageHead"
import SEO from "../components/common/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import ProjectInfo from "../components/project/ProjectInfo"

export const projectQuery = graphql`
  query GET_PROJECT($slug: String!) {
    strapiProjects(slug: { eq: $slug }) {
      slug
      description
      title
      location
      client {
        url
        name
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
`

export default function project({ data }) {
  return (
    <Layout>
      <SEO title={data.strapiProjects.title} />

      <PageHead
        pageName={`Proyectos / ${data.strapiProjects.service.title}`}
        heading={data.strapiProjects.title}
        style={{ height: "85vh" }}
      />

      <Img
        fluid={data.strapiProjects.cover.childImageSharp.fluid}
        alt={data.strapiProjects.cover.alt}
        style={{ margin: "0 -1.5rem" }}
      />

      <ProjectInfo
        client={data.strapiProjects.client}
        location={data.strapiProjects.location}
        status={data.strapiProjects.status}
        description={data.strapiProjects.description}
      />
    </Layout>
  )
}
