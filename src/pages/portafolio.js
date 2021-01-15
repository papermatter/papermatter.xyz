import React from "react"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import PortfolioContainer from "../components/portfolio/PortfolioContainer"
import { PageCover } from "../components/common/PageCover"

export const portfolioQuery = graphql`
  query GET_PORTFOLIO {
    strapiPagePortfolio {
      heading
    }
  }
`

export default function portafolio({ data }) {
  return (
    <Layout>
      <SEO title="Portafolio" />
      <PageCover
        pageName="Portafolio"
        heading={data.strapiPagePortfolio.heading}
      />
      {/* <PortfolioContainer navData={data.allStrapiProjectCategories.edges}>
        <TitleWithDescription>
          <Title data={data.strapiPagePortafolio.title} color={colors.white} />
          <p style={{ color: colors.lightGray, marginTop: ".8em" }}>
            {data.strapiPagePortafolio.subheading}
          </p>
        </TitleWithDescription>
      </PortfolioContainer> */}
    </Layout>
  )
}
