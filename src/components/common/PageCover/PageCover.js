import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { breakpoints, responsiveSectionMargin } from "../../../styles/utils"

const StyledImg = styled(Img)`
  ${responsiveSectionMargin}
  height: 70vh;
  ${breakpoints.laptop} {
    height: 90vh;
  }
`

const PageCover = ({ src, alt }) => {
  return <StyledImg fluid={src} alt={alt} />
}

export default PageCover
