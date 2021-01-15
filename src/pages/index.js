import React, { useState } from "react"

import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"

import HomeAbout from "../components/HomeComponents/HomeAbout"
import { colors } from "../styles/Vars"

// export const index_query = graphql`
//   query GET_HOME_DATA {
//     strapiPageHome {
//       portfolio_description
//       portfolio_title {
//         title_black
//         title_italic
//       }
//       services_description
//       services_title {
//         title_black
//         title_italic
//       }
//       title {
//         title_black
//         title_italic
//       }
//     }
//     allStrapiProjects(limit: 3) {
//       edges {
//         node {
//           slug
//           title
//           main_photo {
//             publicURL
//           }
//         }
//       }
//     }
//   }
// `

const IndexPage = ({ data }) => {
  const [backgroundColor] = useState(colors.white)

  return (
    <Layout backgroundColor={backgroundColor}>
      <SEO title="Inicio" />
      <PageCover heading="Creamos experiencias visuales e interactivas." />
      <HomeAbout />
      {/* <HomePortfolio data={data.strapiPageHome} projects={projects} /> */}
    </Layout>
  )
}

export default IndexPage
