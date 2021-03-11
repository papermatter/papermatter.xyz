import React, { useEffect, useState } from "react"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import { breakpoints, responsiveSectionMargin } from "../../../styles/utils"
import { useIntersectionObserver } from "../../../lib/hooks/use-intersection-observer"

const StyledImg = styled(Img)`
  width: 100%;
  height: auto;
`
const StyledPageCover = styled.div`
  ${responsiveSectionMargin}
  position: relative;
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  display: flex;

  .img-container {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
  }
  ${breakpoints.laptop} {
    height: 100vh;
  }
`

const PageCover = ({ src, alt }) => {
  const [offset, setOffset] = useState(0)

  const { isIntersecting, ref } = useIntersectionObserver()

  useEffect(() => {
    const onScroll = () => {
      if (isIntersecting) {
        setOffset(window.scrollY)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [isIntersecting])

  return (
    <StyledPageCover ref={ref}>
      <div className="img-container">
        <StyledImg
          fluid={src}
          alt={alt}
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        />
      </div>
    </StyledPageCover>
  )
}

export default PageCover

PageCover.propTypes = {
  alt: PropTypes.string,
}
