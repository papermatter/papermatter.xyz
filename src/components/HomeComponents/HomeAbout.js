import React from 'react'
import { StyledHomeSectionAbout } from './styles'
import { LinkComponent } from '../ui/LinkComponent'


export default function HomeAbout() {
  return (
    <StyledHomeSectionAbout>
      <LinkComponent to='/nosotros'>LEE MÁS DE NOSOTROS</LinkComponent>
    </StyledHomeSectionAbout>
  )
}
