import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import { StyledHomeSectionAbout } from './styles'
import { LinkComponent } from '../ui'


export default function HomeAbout() {
  const home_about_query = useStaticQuery(graphql`
    query MyQuery {
      strapiPageAbout {
        description_list {
          id
          title_black
          title_italic
          photo {
            publicURL
          }
        }
      }
    }
  `) 
  return (
    <StyledHomeSectionAbout>
      <PhotoCarousel data={home_about_query.strapiPageAbout.description_list} />
      <LinkComponent to='/nosotros'>LEE MÁS DE NOSOTROS</LinkComponent>
    </StyledHomeSectionAbout>
  )
}
