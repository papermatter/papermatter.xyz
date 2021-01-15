import React from "react"
import { Div, Title, StyledPhotoContainer } from "./styles"
import styled from "styled-components"

const StyledServices = styled.section`
  background: red;
`

export default function Services({ services }) {
  return (
    <StyledServices>
      {services.map(({ node }, index) => (
        <Div key={node.strapiId} id={`${node.strapiId}`}>
          <p>
            {index + 1} / {services.length}
          </p>
          <Title>{node.title}</Title>
          <StyledPhotoContainer imgWidth="60%" imgHeight={"40vh"}>
            <img src={node.Illustration.publicURL} alt="" />
          </StyledPhotoContainer>
        </Div>
      ))}
    </StyledServices>
  )
}
