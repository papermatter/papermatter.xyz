import React from 'react'
import { Layout } from '../components'
import SEO from '../components/common/seo'
import { graphql } from 'gatsby'
import { colors } from '../styles/Vars'
import Title from '../components/Title/Title'
import PortfolioContainer from '../components/Portfolio/PortfolioContainer'
import TitleWithDescription from '../components/TitleWithDescription/TitleWithDescription'

export const portafolioQuery = graphql`
  query GET_PORTFOLIO_DATA {
    strapiPagePortafolio {
      title {
        title_black
        title_italic
      }
      subheading
    }
    allStrapiProjectCategories {
      edges {
        node {
          name 
          short_name
          slug
        }
      }
    } 
  }
`

export default function portafolio({data}) {
  return (
    <Layout backgroundColor={colors.black}>
      <SEO title="Portafolio" />
      <PortfolioContainer navData={data.allStrapiProjectCategories.edges}>
        <TitleWithDescription>
          <Title data={data.strapiPagePortafolio.title} color={colors.white} />
          <p style={{ color: colors.lightGray, marginTop: ".8em" }}>
            {data.strapiPagePortafolio.subheading}
          </p>
        </TitleWithDescription>
      </PortfolioContainer>
    </Layout>
  )
}