import React from "react"
import styled from "styled-components"
import PortfolioImageCard from "./PortfolioImageCard"

const StyledPortafolioContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PortfolioContainer = ({ images }) => {
  return (
    <StyledPortafolioContainer>
      {images.map(image => (
        <PortfolioImageCard image={image} key={image.id} />
      ))}
    </StyledPortafolioContainer>
  )
}

export default PortfolioContainer
