import React from 'react'
import {Title} from '../../components/ui/Title'
import { StyledHistoryDiv, StyledHistoryGrid } from './styles'


export default function History({title, data}) {
  return (
    <div>
      <Title data={title} />
      <StyledHistoryGrid>
        {data.map((date, index) => (
          <StyledHistoryDiv key={index} index={index}>
            <h6>{date.year_date}</h6>
            <p>{date.description}</p>
          </StyledHistoryDiv>
        ))}
      </StyledHistoryGrid>
    </div>
  )
}
 