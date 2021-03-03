import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import HomeCover from "../components/common/PageCover/HomeCover"
import HomeSection from "../components/sections/HomeSection"
import ServicesSlider from "../components/sections/ServicesSlider"
import ImagesSlider from "../components/sections/ImagesSlider"
import ArrowsDivider from "../components/UI/ArrowsDivider"
import { useIsMobile } from "../lib/hooks/use-media-queries"
import ExploreOurWorkSection from "../components/sections/ExploreOurWorkSection"

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
      cover {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allStrapiServices {
      nodes {
        title
        id
      }
    }
    allStrapiImages(limit: 4) {
      nodes {
        id
        title
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({
  data: { strapiHome: data, allStrapiServices, allStrapiImages },
}) => {
  const isMobile = useIsMobile()

  return (
    <Layout toggleHeaderColor>
      <SEO title="Experencias visuales interactivas" />

      <HomeCover
        heading={data.heading}
        cover={data.cover.childImageSharp.fluid}
      />

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
        linkTo="/servicios"
        linkLabel="ver servicios"
      />
      <ArrowsDivider />

      {isMobile ? (
        <HomeSection
          style={{ textAlign: "center" }}
          heading={data.projects.heading}
          linkTo="/portfolio"
          linkLabel="Ir a trabajos"
        >
          <ImagesSlider
            images={allStrapiImages.nodes.slice(0, 2)}
            initialPosition="-150px"
          />
          <ImagesSlider images={allStrapiImages.nodes.slice(2, 4)} />
        </HomeSection>
      ) : (
        <ExploreOurWorkSection
          heading={data.projects.heading}
          images={allStrapiImages.nodes.slice(0, 3)}
        />
      )}
    </Layout>
  )
}

export default IndexPage
