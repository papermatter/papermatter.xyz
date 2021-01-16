import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common/Layout"
import SEO from "../components/common/seo"
import HomeCover from "../components/common/PageCover/HomeCover"
import HomeSection from "../components/sections/HomeSection"
import ArrowsDivider from "../components/ui/ArrowsDivider"
import ServicesSlider from "../components/sections/ServicesSlider"

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
  }
`

const IndexPage = ({ data: { strapiHome: data, allStrapiServices } }) => {
  const [isShowed, setIsShowed] = useState(false)

  const showText = () => {
    if (window.scrollY > 200) {
      setIsShowed(true)
    } else {
      setIsShowed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showText)
    return () => {
      window.removeEventListener("scroll", showText)
    }
  }, [])

  return (
    <Layout bgColor={isShowed ? "" : "transparent"}>
      <SEO title="Inicio" />

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
