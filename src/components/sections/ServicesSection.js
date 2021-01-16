import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const StyledServicesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  .service-card {
    width: 350px;
    height: 36rem;
    border-bottom: 2px dashed var(--gray-25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .service-card:last-child {
    border-bottom: 0;
  }
  .info {
    position: absolute;
    z-index: 2;
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
`

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
