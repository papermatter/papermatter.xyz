import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { breakpoints } from "../../styles/Vars"

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
            <Link to="/projects">ver projectos</Link>
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
  ${breakpoints.laptop} {
    &:hover .service-card {
      opacity: 0.1;
    }
  }
  .service-card {
    width: 50%;
    min-width: 350px;
    height: 36rem;
    border-bottom: 2px dashed var(--gray-25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: opacity 0.35s;
    ${breakpoints.laptop} {
      border: 1px solid var(--gray-50);
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
    a {
      text-decoration: underline;
    }
    h3 {
      margin: 1.5rem 0 0;
      font-size: var(--font-xl);
    }
    p {
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
