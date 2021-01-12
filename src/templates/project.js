import React from 'react'
import { Layout } from '../components'
import SEO from '../components/seo'
import Project from '../components/Project/Project';
import { graphql } from 'gatsby';
import NextProjectCard from '../components/NextProjectCard/NextProjectCard'

export const project_query = graphql`
  query GET_PROJECT($id: Int!) {
    strapiProjects(strapiId: {eq: $id}) {
      strapiId
      id
      description
      client
      slug
      title
      year
      location
      main_photo {
        publicURL
        childImageSharp {
          fluid {
            src
          }
        }
      }
      Photos {
        alt
        id
        project_photo {
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      project_category {
        slug
        name
      }
    }
  }
`

export default function project({data}) {
  const project = data.strapiProjects;

  return (
    <Layout>
      <SEO title="portafolio" />
      <Project project={project} />
      <NextProjectCard currentProject={project.strapiId} />
    </Layout>
  )
}
 