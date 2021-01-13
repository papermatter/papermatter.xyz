import React from 'react'
import {Title} from '../ui/Title'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { ArrowRightIcon } from '../Icons'
import { StyledHomeSectionServices } from './styles'
import { LinkComponent } from '../ui'
import { TitleWithDescription } from '../ui/TitleWithDescription'
import { useBreakpoint } from '../../lib/hooks/useBreakpoints'


export default function HomeServicesSection({data, id}) {
  const querydata = useStaticQuery(graphql`
    query GET_SERVICES_DATA {
      allStrapiProjectCategories {
        nodes {
          slug
          short_name
          name
          strapiId
        }
      }
    }
  `)
  const breakpoints = useBreakpoint()
  return (
    <StyledHomeSectionServices id={id}>
      <TitleWithDescription>
        <Title data={data.services_title} />
        <div>
          <p className="description">{data.services_description}</p>
          {breakpoints.laptop && (
            <LinkComponent to="/servicios">IR A SERVICIOS</LinkComponent>
          )}
        </div>
      </TitleWithDescription>
      <div className="services-container">
        {querydata.allStrapiProjectCategories.nodes.map((item, index) => (
          <div className="service-item" key={index}>
            <div className="service-nav">
              <div>0{index + 1}</div>
              <Link to={`/servicios#${item.strapiId}`}>
                <ArrowRightIcon size={"1.5em"} />
              </Link>
            </div>
            <h2>{item.short_name || item.name}</h2>
          </div>
        ))}
      </div>
      {!breakpoints.laptop && (
        <LinkComponent to="/servicios">IR A SERVICIOS</LinkComponent>
      )}
    </StyledHomeSectionServices>
  )
}
