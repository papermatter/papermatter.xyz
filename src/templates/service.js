import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"
import Img from "gatsby-image"
import HomeSection from "../components/sections/HomeSection"
import ServiceSteps from "../components/sections/ServiceSteps"
import ServicesSliderLink from "../components/sections/ServicesSliderLink"

export const portfolioQuery = graphql`
  query GET_SERVICE($slug: String!) {
    strapiServices(slug: {eq: $slug}) {
      heading
      slug
      title
      description
      cover {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      steps {
        description
        title
        id
      }
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
        pageName="Servicios/"
        heading={data.strapiServices.title}
        style={{height: '85vh'}}
      />

      <Img
        fluid={
          data.strapiServices.cover.childImageSharp.fluid
        }
        alt={data.strapiServices.cover.alt}
        style={{ margin: "0 -1.5rem" }}
      />

      <HomeSection
        heading={data.strapiServices.heading}
        description={data.strapiServices.description}
        linkTo="#contacto"
        linkLabel="Trabaja con nosotros"
      />

      <ServiceSteps steps={data.strapiServices.steps}/>

      <ServicesSliderLink services={data.allStrapiServices.nodes} />

    </Layout>
  )
}
