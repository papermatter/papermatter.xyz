import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Layout } from "../components"
import SEO from "../components/seo"
import { colors } from "../styles/Vars"
import History from "../components/History/History"
import DescriptionList from '../components/DescriptionList/DescriptionList'
import Clients from "../components/Clients/Clients"
import Team from "../components/Team/Team"
import withLocation from "../HoC/withLocation"
import Slideshow from "../components/Slideshow/Slideshow"
import AboutPageCover from "../components/PageCover/AboutPageCover"
import { useBreakpoint } from "../hooks/useBreakpoints"

export const aboutQuery = graphql`
  query GET_DATA_ABOUT {
    strapiPageAbout {
      description
      history_title {
        title_black
        title_italic
      }
      history {
        year_date
        description
      }
      description_list {
        title_black
        title_italic
      }
      team {
        first_name
        last_name
        business_title
        photo {
          publicURL
        }
      }
      clients_title {
        title_black
        title_italic
      }
    }
  }
`

const AboutPage = ({ data, search }) => {
  const breakpoints = useBreakpoint()

  useEffect(()=> {
    if (search !== undefined) {
      window.scrollTo({ top: search.scroll, behavior: "smooth" })
    }
  }, [search])

  return (
    <>
      <Layout backgroundColor={colors.gray}>
        <SEO title="Nosotros" />
        <AboutPageCover data={data.strapiPageAbout}>
          <Slideshow time="30">
            <>
              <h3>¿De dónde venimos?</h3>
              <h3>¿Quiénes somos?</h3>
              <h3>¿Qué hacemos?</h3>
              <h3>¿Cómo te podemos ayudar?</h3>
              <h3>¿Qué queremos?</h3>
            </>
          </Slideshow>
          {!breakpoints.tablet && (
            <>
              <Slideshow time="20" start="even">
                <>
                  <h3>¿Qué hacemos?</h3>
                  <h3>¿Cómo te podemos ayudar?</h3>
                  <h3>¿Quiénes somos?</h3>
                  <h3>¿Qué queremos?</h3>
                  <h3>¿De dónde venimos?</h3>
                </>
              </Slideshow>
              <Slideshow time="35">
                <>
                  <h3>¿Qué queremos?</h3>
                  <h3>¿Qué podemos hacer?</h3>
                  <h3>¿De dónde venimos?</h3>
                  <h3>¿Qué hacemos?</h3>
                  <h3>¿Quiénes somos?</h3>
                </>
              </Slideshow>
            </>
          )}
          <p>{data.strapiPageAbout.description}</p>
        </AboutPageCover>
        <History
          title={data.strapiPageAbout.history_title}
          data={data.strapiPageAbout.history}
        />
        <Team data={data.strapiPageAbout.team} />
        <DescriptionList data={data.strapiPageAbout.description_list} />
        <Clients title={data.strapiPageAbout.clients_title} />
      </Layout>
    </>
  )
} 

export default withLocation(AboutPage)
