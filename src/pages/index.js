import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { PageCover } from "../components/common/PageCover"
import HomeSection from "../components/sections/HomeSection"
import ArrowsDivider from "../components/ui/ArrowsDivider"
import Slider from "../components/ui/Slider"
import ServicesSlider from "../components/sections/ServicesSlider"

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
    }
    allStrapiServices {
      nodes {
        title
        id
      }
    }
  }
`

const IndexPage = ({ data: { strapiHome: data, allStrapiServices } }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <PageCover heading={data.heading} />

      <HomeSection
        heading={data.about.heading}
        description={data.about.description}
        linkTo="/about-us"
        linkLabel="ver nosotros"
      />

      <ServicesSlider services={allStrapiServices.nodes} />

      <HomeSection
        heading={data.services.heading}
        description={data.services.description}
        linkTo="/services"
        linkLabel="ver servicios"
      />
      <ArrowsDivider />

      <HomeSection
        heading={data.projects.heading}
        linkTo="/portfolio"
        linkLabel="ver portafolio"
      >
        <div>Hola</div>
      </HomeSection>
    </Layout>
  )
}

export default IndexPage
