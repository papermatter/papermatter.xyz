import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/Vars'

const StyledTitleWithDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  p {
    color: ${colors.gray};
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2.8fr 1fr;
    align-items: center;
    padding: 2em 0;
    div > div {
      margin: 0;
      margin-left: 1.5em;
    }
  }
`


export default function TitleWithDescription({children}) {
  return (
    <StyledTitleWithDescription>
      {children}
    </StyledTitleWithDescription>
  )
}
