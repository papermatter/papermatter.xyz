import React, { useEffect, useState } from "react"

import { Layout } from "../components"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import PageCover from "../components/PageCover/PageCover"
import Title from "../components/Title/Title"
import HomeServicesSection from "../components/HomeComponents/HomeServices"
import HomePortfolio from "../components/HomeComponents/HomePortfolio"
import HomeAbout from "../components/HomeComponents/HomeAbout"
import { colors } from "../styles/Vars"
import { Helmet } from "react-helmet"

export const index_query = graphql`
  query GET_HOME_DATA {
    strapiPageHome {
      portfolio_description
      portfolio_title {
        title_black
        title_italic
      }
      services_description
      services_title {
        title_black 
        title_italic
      }
      title {
        title_black
        title_italic
      }
    }
    allStrapiProjects(limit: 3) {
      edges {
        node {
          slug
          title
          main_photo {
            publicURL
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  const [projects, setProjects] = useState([])
  const [backgroundColor] = useState(colors.white);
  
  useEffect(() => {
    const mapedData = []
      data.allStrapiProjects.edges.map(project => {
       mapedData.push(project.node)
       return mapedData
      })
      setProjects(mapedData)
  }, [data])
  
  return (
    <Layout backgroundColor={backgroundColor}>
      <SEO title="Inicio" />
      <PageCover scrollTo="services-section">
        <Title data={data.strapiPageHome.title} inverted={true} />
      </PageCover>
      <HomeServicesSection data={data.strapiPageHome} id="services-section" />
      <HomeAbout />
      <HomePortfolio data={data.strapiPageHome} projects={projects} />
    </Layout>
  )
}

export default IndexPage
