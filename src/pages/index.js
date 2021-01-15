import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { PageCover } from "../components/common/PageCover"
import HomeSection from "../components/sections/HomeSection"

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
