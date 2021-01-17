import React from "react"

import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "../UI/Slider"

const StyledLink = styled.a`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  margin: 0 2rem;
`

const StyledImg = styled(Img)`
  height: auto;
  width: 100px;
  margin: 0 -1.5rem;
`

const ClientsSlider = ({ clients }) => {
  return (
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
  )
}

export default ClientsSlider
