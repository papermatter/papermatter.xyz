import React from 'react'
import { Title }from '../ui/Title'
import { StyledClients } from './styles'
import Slideshow from '../Slideshow/Slideshow'


export default function Clients({title}) {
  return (
    <StyledClients>
      <Title data={title} color={"white"} />
      <Slideshow time="25">
        <>
          <h2>Cliente 1</h2>
          <h2>Cliente 2</h2>
          <h2>Cliente 4</h2>
        </>
      </Slideshow>
    </StyledClients>
  )
}
 