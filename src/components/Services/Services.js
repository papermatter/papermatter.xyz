import React from 'react'
import {Div, Title, DesktopDiv, StyledPhotoContainer} from './styles'
import Tab from './Tab'
import { useBreakpoint } from '../../hooks/useBreakpoints'
import ServiceContainer from './ServiceContainer'



export default function Services({services}) {
  const breakpoints = useBreakpoint()
  if (breakpoints.laptop) {
    return (
      <div id='services'>
        {services.map(({ node }, index) => (
          <DesktopDiv key={node.strapiId} id={`${node.strapiId}`}>
            <ServiceContainer
              data={node}
              index={index}
              services={services}
              isRight={index % 2 !== 0}
            />
          </DesktopDiv>
        ))}
      </div>
    )
  }
  return (
    <div id="services">
      {services.map(({ node }, index) => (
        <Div key={node.strapiId} id={`${node.strapiId}`}>
          <p>
            {index + 1} / {services.length}
          </p>
          <Title>{node.title}</Title>
          <Tab data={node} />
          <StyledPhotoContainer imgWidth='60%' imgHeight={'40vh'}>
            <img src={node.Illustration.publicURL} alt="" />
          </StyledPhotoContainer>
        </Div>
      ))}
    </div>
  )
}
