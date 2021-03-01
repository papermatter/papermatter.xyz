import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { breakpoints, responsiveSectionMargin, responsiveSectionPadding } from "../../styles/utils"

export default function ServicesSection({ services }) {
  return (
    <StyledServicesSection>
      {services.map((service, index) => (
        <div className="service-card" key={service.id}>
          <div className="info">
            <span>
              {index < 10 ? `0${index + 1}` : index + 1} / {services.length}
            </span>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <Link to={`/servicios/${service.slug}`}>ver {service.title}</Link>
          </div>

          <StyledImg fluid={service.cover.childImageSharp.fluid} />
        </div>
      ))}
    </StyledServicesSection>
  )
}

const StyledServicesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: var(--primary);
  color: var(--background);
  ${responsiveSectionMargin}
  ${responsiveSectionPadding}
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${breakpoints.laptop} {
    padding-top: 15rem;
    padding-bottom: 15rem;
    &:hover .service-card {
      opacity: 0.1;
    }
  }

  .service-card {
    width: 100%;
    height: 36rem;
    border-bottom: 2px dashed var(--primary-10);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: opacity 0.35s;
    ${breakpoints.laptop} {
      width: 50%;
      border: 1px dashed var(--primary-60);
      &:first-child,
      :nth-child(2) {
        border-top: none;
      }
      &:nth-child(odd):nth-last-child(even) {
        border-bottom: none;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
  .service-card:last-child {
    border-bottom: 0;
  }
  .info {
    position: absolute;
    z-index: 2;
    width: 100%;
    pointer-events: none;
    ${breakpoints.laptop} {
      padding: 4rem;
    }
    span, a {
      font-family: var(--font-mono);
    }
    a {
      text-decoration: underline;
    }
    h3 {
      margin: 1.5rem 0 0;
      font-size: var(--font-3xl);
    }
    p {
      color: var(--primary-20);
      font-size: var(--font-lg);
      line-height: 1.5;
      margin: 2rem 0;
    }
  }
`

const StyledImg = styled(Img)`
  z-index: 1;
  position: absolute;
  height: 26rem;
  width: 100%;
  margin: 0;
  opacity: 0.5;
  ${breakpoints.laptop} {
    opacity: 0;
    transition: opacity 0.35s;
    &:hover {
      opacity: 0.5;
    }
  }
`
