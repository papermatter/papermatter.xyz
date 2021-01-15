import React from "react"

import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"
import Services from "../components/Services/Services"

export const query = graphql`
  query MyQuery {
    strapiPageServices {
      heading
      description
    }
    allStrapiServices {
      nodes {
        id
        title
        slug
        description
      }
    }
  }
`

const ServicesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Servicios" />
      <PageCover
        pageName="Servicios"
        heading={data.strapiPageServices.heading}
        description={data.strapiPageServices.description}
      />
      <Services services={data.allStrapiServices.nodes} />
    </Layout>
  )
}

export default ServicesPage
