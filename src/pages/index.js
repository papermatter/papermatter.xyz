import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { PageCover } from "../components/common/PageCover"
import HomeSection from "../components/sections/HomeSection"
import ArrowsDivider from "../components/ui/ArrowsDivider"
import Slider from "../components/ui/Slider"

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
  }
`

const IndexPage = ({ data: { strapiHome: data } }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <PageCover heading={data.heading} />

      <Slider time="17s" gap="2rem">
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
      </Slider>

      <Slider initialPosition="10%">
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
      </Slider>

      <HomeSection
        heading={data.about.heading}
        description={data.about.description}
        linkTo="/about-us"
        linkLabel="ver nosotros"
      />
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
