import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  }
  .service-card:last-child {
    border-bottom: 0;
  }
  a {
    text-decoration: underline;
  }
  h3 {
    margin: 1.5rem 0 0;
    font-size: 2.5rem;
  }
  p {
    margin: 2rem 0;
  }
`

export default function ServicesSection({ services }) {
  return (
    <StyledServicesSection>
      {services.map((service, index) => (
        <div className="service-card" key={service.id}>
          <span>
            {index < 10 ? `0${index + 1}` : index + 1} / {services.length}
          </span>

          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <Link to="/projects">ver projectos</Link>
        </div>
      ))}
    </StyledServicesSection>
  )
}
