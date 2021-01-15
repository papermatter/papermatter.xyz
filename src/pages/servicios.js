import React from "react"

import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import { graphql } from "gatsby"
import { PageCover } from "../components/common/PageCover"
import Services from "../components/Services/Services"

// export const query = graphql`
//   query GET_DATA {
//     allStrapiPageServices {
//       edges {
//         node {
//           title {
//             title_black
//             title_italic
//           }
//           description
//         }
//       }
//     }
//     allStrapiServices {
//       edges {
//         node {
//           title
//           shortname
//           description
//           strapiId
//           advantages
//           Illustration {
//             publicURL
//           }
//         }
//       }
//     }
//   }
// `

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Servicios" />
      <PageCover
        pageName="Servicios"
        heading="Hacemos más de lo que necesitas"
        description="Somos un estudio basado en Ciudad de México, que busca innovar, con tecnología de por medio, el mercado inmobiliario y transformarlo en una toda una experiencia, más allá de la compra-venta."
      />
      {/* <Services services={data.allStrapiServices.edges} id="services" /> */}
    </Layout>
  )
}

export default ServicesPage
