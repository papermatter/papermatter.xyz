import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "../UI/Slider"
import { responsiveSectionMargin } from "../../styles/utils"
import { useIsMobile } from "../../lib/hooks/use-media-queries"

const StyledClientSlider = styled.div`
  ${responsiveSectionMargin}
`

const StyledClientsGrid = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  a {
    margin: 1rem 4rem;
  }
`

const StyledLink = styled.a`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  margin: 0 5rem;
`

const StyledImg = styled(Img)`
  height: auto;
  width: 128px;
  margin: 0 -1.5rem;
`

const ClientsSlider = ({ clients }) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <StyledClientSlider>
        <Slider>
          {clients.map(client => (
            <StyledLink
              key={client.id}
              href={client.url}
              aria-label={`Link to ${client.name} website`}
              target="_blank"
              rel="noreferrer"
              title={client.name}
            >
              <StyledImg
                fluid={client.logo.childImageSharp.fluid}
                alt={client.name}
              />
            </StyledLink>
          ))}
        </Slider>
      </StyledClientSlider>
    )
  }
  return (
    <StyledClientsGrid>
      {clients.map(client => (
        <StyledLink
          key={client.id}
          href={client.url}
          aria-label={`Link to ${client.name} website`}
          target="_blank"
          rel="noreferrer"
          title={client.name}
        >
          <StyledImg
            fluid={client.logo.childImageSharp.fluid}
            alt={client.name}
          />
        </StyledLink>
      ))}
    </StyledClientsGrid>
  )
}

export default ClientsSlider
