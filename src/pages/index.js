import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import HomeCover from "../components/common/PageCover/HomeCover"
import HomeSection from "../components/sections/HomeSection"
import ServicesSlider from "../components/sections/ServicesSlider"
import ArrowsDivider from "../components/UI/ArrowsDivider"
import ExploreOurWorkSection from "../components/sections/ExploreOurWorkSection"

export const homeQuery = graphql`
  query GET_HOME {
    strapiHome {
      heading
      about {
        description
        heading
      }
      projects {
        heading
      }
      services {
        description
        heading
      }
      cover {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allStrapiServices {
      nodes {
        title
        id
      }
    }
    allStrapiImages(limit: 4) {
      nodes {
        id
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({
  data: { strapiHome: data, allStrapiServices, allStrapiImages },
}) => {
  return (
    <Layout toggleHeaderColor>
      <SEO title="Experencias visuales interactivas" />

      <HomeCover
        heading={data.heading}
        cover={data.cover.childImageSharp.fluid}
      />

      <HomeSection
        heading={data.about.heading}
        description={data.about.description}
        linkTo="/nosotros"
        linkLabel="ver nosotros"
      />

      <ServicesSlider services={allStrapiServices.nodes} />

      <HomeSection
        heading={data.services.heading}
        description={data.services.description}
        linkTo="/servicios"
        linkLabel="ver servicios"
        alignCenter
      />

      <ArrowsDivider />

      <ExploreOurWorkSection
        heading={data.projects.heading}
        images={allStrapiImages.nodes.slice(0, 4)}
      />
    </Layout>
  )
}

export default IndexPage
