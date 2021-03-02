import React from 'react'
import { Layout } from '../components/common/Layout'
import { PageCover } from '../components/common/PageCover'
import SEO from '../components/common/seo'
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export const projectQuery = graphql`
  query GET_PROJECT($slug: String!) {
    strapiProjects(slug: {eq: $slug}) {
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

      <PageCover
        pageName="Proyectos / Servicios"
        heading={data.strapiProjects.title}
        style={{ height: '85vh' }}
      />

      <Img
        fluid={
          data.strapiProjects.cover.childImageSharp.fluid
        }
        alt={data.strapiProjects.cover.alt}
        style={{ margin: "0 -1.5rem" }}
      />

    </Layout>
  )
}
