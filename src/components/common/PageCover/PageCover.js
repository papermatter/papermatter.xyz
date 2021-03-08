import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import { breakpoints, responsiveSectionMargin } from "../../../styles/utils"

const StyledImg = styled(Img)`
  ${responsiveSectionMargin}
  width: 100vw;
  height: 70vh;
  ${breakpoints.laptop} {
    height: 100vh;
  }
`

const PageCover = ({ src, alt }) => {
  return <StyledImg fluid={src} alt={alt} />
}

export default PageCover

PageCover.propTypes = {
  alt: PropTypes.string,
}
