import React from "react"
import { Layout } from "../components/common/Layout"
import { PageHead } from "../components/common/PageHead"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import ProjectInfo from "../components/project/ProjectInfo"
import PageCover from "../components/common/PageCover/PageCover"
import PhotosList from "../components/project/PhotosList"

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
      photos {
        id
        alt
        photo {
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

export default function project({ data }) {
  return (
    <Layout>
      <SEO title={data.strapiProjects.title} />
      <PageHead
        pageName="Proejctos"
        breadcrumbs={[
          {
            title: "Proyectos",
            href: "/portafolio",
          },
          {
            title: data.strapiProjects.service.title,
            href: `/servicios/${data.strapiProjects.service.slug}`,
          },
        ]}
        heading={data.strapiProjects.title}
        style={{ height: "85vh" }}
      />

      <PageCover
        src={data.strapiProjects.cover.childImageSharp.fluid}
        alt={data.strapiProjects.cover.alt}
      />

      <ProjectInfo
        client={data.strapiProjects.client}
        location={data.strapiProjects.location}
        status={data.strapiProjects.status}
        description={data.strapiProjects.description}
      />

      <PhotosList photos={data.strapiProjects.photos} />
    </Layout>
  )
}
