import React from 'react'
import {Title} from '../ui/Title'
import { StyledHomeSectionPortfolio } from './styles'
import { LinkComponent } from '../ui'
import CardContainer from '../portfolio/CardContainer/CardContainer'
import { colors } from '../../styles/Vars'
import {TitleWithDescription} from '../ui/TitleWithDescription'
import { useBreakpoint } from '../../lib/hooks/useBreakpoints'

export default function HomePortfolio({data, projects}) {
  const breakpoints = useBreakpoint()
  return (
    <StyledHomeSectionPortfolio>
      <TitleWithDescription>
        <Title data={data.portfolio_title} color={colors.white} />
        <div>
          <p style={{ color: colors.lightGray }}>
            {data.portfolio_description}
          </p>
          {breakpoints.laptop && (
            <LinkComponent to="/portafolio" color={colors.white}>IR AL PORTAFOLIO</LinkComponent>
          )}
        </div>
      </TitleWithDescription>
      <hr style={{ borderBottom: `1px solid ${colors.darkGray}` }} />
      
      <CardContainer data={projects} staticData={true} />

      {!breakpoints.laptop && (
        <LinkComponent to="/portafolio" color={colors.white}>
          IR AL PORTAFOLIO
        </LinkComponent>
      )}
    </StyledHomeSectionPortfolio>
  )
}
