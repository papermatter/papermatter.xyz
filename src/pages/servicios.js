import React from "react"

import {Layout} from '../components/common/Layout'
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import {PageCover} from "../components/common/PageCover"
import Services from "../components/Services/Services"
import {Title} from '../components/ui/Title'
import {TitleWithDescription} from "../components/ui/TitleWithDescription"

export const query = graphql`
  query GET_DATA  {
    allStrapiPageServices {
      edges {
        node {
          title{
            title_black,
            title_italic
          }
          description
        }
      }
    }
    allStrapiServices{
      edges {
        node {
          title
          shortname
          description
          strapiId
          advantages
          Illustration {
            publicURL
          }
        }
      }
    }
  }
`

const ServicesPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Servicios" />
      <PageCover data={data.allStrapiPageServices.edges[0].node} scrollTo='services'>
        <TitleWithDescription>
          <Title data={data.allStrapiPageServices.edges[0].node.title[0]} />
          <p>{data.allStrapiPageServices.edges[0].node.description}</p>
        </TitleWithDescription>
      </PageCover>
      <Services services={data.allStrapiServices.edges} id='services' />
    </Layout>
  )
}

export default ServicesPage
