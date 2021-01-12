import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import SkeletonCard from './SkeletonCard'
import { breakpoints} from '../../styles/Vars'

const StyledCardContainer = styled.div`
  padding: 2em 0;
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
  ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 13vw;
  }
`

export default function CardContainer({data, loading, staticData = false}) {
  return (
    <StyledCardContainer>
      {!loading && data.length === 0 
        ?  <SkeletonCard />
        : data.map((item, index) => (
          <Card data={item} key={index} staticData={staticData} />
        ))
      }
      {loading ? <SkeletonCard /> : null}
    </StyledCardContainer>
    
  )
}
