import React from 'react'
import Title from '../Title/Title'
import { StyledHomeSectionPortfolio } from './styles'
import { LinkComponent } from '../UI'
import CardContainer from '../CardContainer/CardContainer'
import { colors } from '../../styles/Vars'
import TitleWithDescription from '../TitleWithDescription/TitleWithDescription'
import { useBreakpoint } from '../../hooks/useBreakpoints'

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
