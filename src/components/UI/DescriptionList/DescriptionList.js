import React from 'react'
import { StyledDescriptionList } from './styles'

export default function DescriptionList({data}) {
  return (
    <StyledDescriptionList>
      {data.map((text, index) => (
        <div className='container' key={index}>
          <p>0{index + 1}</p>
          <h5>
            {text.title_black}
            <span> {text.title_italic}</span>
          </h5>
        </div>
      ))}
    </StyledDescriptionList>
  )
}
